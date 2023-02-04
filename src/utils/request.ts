import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { ApiTimeout, HttpStatus } from '@/config';
import type { DTO, HttpStatusCode } from '@/config';
import { message } from 'antd';
import { downloadStreamFile } from '@/utils/';

class Request {
  private instance: AxiosInstance;

  private baseConfig: AxiosRequestConfig = {
    // 默认地址请求地址，可在 .env 开头文件中修改
    baseURL: import.meta.env.VITE_API_URL as string,
    timeout: ApiTimeout
  };

  public constructor(config: AxiosRequestConfig = {}) {
    // 创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    // 请求拦截器
    this.instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<DTO>) => {
        const { headers, data } = response;
        if (headers['content-type']?.includes('application/json')) {
          // 服务端自定义的一套状态码，并不是真实的http状态码，如果处理http状态码错误，请至下面error错误函数中修改
          if (data.Code !== 200) {
            const errorText = data.Message || HttpStatus[data.Code as HttpStatusCode] || 'HTTP响应错误';
            // todo: 401 退出登录
            data.Code === 401 && 1; // 退出登录
            message.error(errorText);
            return Promise.reject(errorText);
          }
          message.success(data.Message);
        }
        return response;
      },
      error => {
        // 这里处理http状态码错误
        message.error(`${error.message}, 请检查网络或联系管理员`);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Get 请求
   * @param url
   * @param config
   * @returns {DTO.Data} return response.data.Data
   */
  public get<ResData = any>(url: string, config?: AxiosRequestConfig): Promise<ResData> {
    return this.instance.get<DTO<ResData>>(url, config).then(({ data }) => data.Data);
  }

  /**
   * Post 请求
   * @param url
   * @param data
   * @param config
   * @returns {DTO.Data} 直接返回数据部分 return response.data.Data
   */
  public post<Params = any, ResData = any>(url: string, data: Params, config?: AxiosRequestConfig): Promise<ResData> {
    return this.instance.post<DTO<ResData>>(url, data, config).then(({ data }) => data.Data);
  }

  /**
   * 获取Blob数据
   * @param url
   * @param data
   * @param config
   * @returns
   */
  public getBlob<Params = any>(
    url: string,
    data: Params,
    config?: AxiosRequestConfig
  ): Promise<{
    blob: Blob;
    filename?: string;
    fileType?: string;
  }> {
    return this.post(url, data, { responseType: 'blob', ...config }).then(res => {
      const { data, headers } = res;
      // if (headers['content-type'] === 'application/octet-stream') {}
      const fileType = headers['content-type'];
      const filename = headers['content-disposition'].split('=')[1];
      return { blob: data, filename: decodeURIComponent(filename), fileType };
    });
  }

  /**
   * 请求流数据文件并直接下载
   * @param url
   * @param data
   * @param config
   * @returns
   */
  public async getStreamFileToDownload<Params = any>(url: string, data: Params, config?: AxiosRequestConfig) {
    const { blob, filename, fileType } = await this.getBlob(url, data, config);
    downloadStreamFile(blob, filename, fileType);
    return { blob, filename, fileType };
  }

  /**
   * 应对其他情况的请求方法，如: 需要返回整个response.data 等。
   * @param {AxiosRequestConfig} config
   * @returns {AxiosResponse.data} return response.data
   */
  public request<ResData = any>(config: AxiosRequestConfig) {
    return this.instance.request<DTO<ResData>>(config).then(response => response.data);
  }
}

export default new Request();
