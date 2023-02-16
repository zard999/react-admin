import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { ApiTimeout, HttpStatus } from '@/config';
import type { DTO, HttpStatusCode } from '@/config';
import { globalStore } from '@/stores';
import { downloadStreamFile } from '@/utils/';
import { message, Modal } from 'antd';

class Request {
  private instance: AxiosInstance;

  private baseConfig: AxiosRequestConfig = {
    // 默认地址请求地址，可在 .env 开头文件中修改
    baseURL: import.meta.env.VITE_API_URL,
    timeout: ApiTimeout
  };

  public constructor(config: AxiosRequestConfig = {}) {
    // 创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    // 请求拦截器
    this.instance.interceptors.request.use(
      config => {
        // 在这里可以添加一些请求前的操作
        const token = globalStore.userInfo?.token;
        if (token) {
          config.headers.authorization = `${token}`;
        }
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
          console.log('data', data);
          if (data.code !== 200) {
            const errorText = data.msg || HttpStatus[data.code as HttpStatusCode] || 'HTTP响应错误';
            // 401：token已失效
            if (data.code === 401) {
              Modal.info({
                title: '登录信息已失效，请重新登录！！！',
                okText: '确定',
                onOk() {
                  globalStore.clearUserInfo();
                  window.location.hash = '/login';
                }
              });
            }
            message.error(errorText);
            return Promise.reject(errorText);
          }
          message.success(data.msg);
        }
        return response;
      },
      error => {
        // 这里处理http状态码错误
        // 对响应错误做点什么
        if (error.message.indexOf('timeout') != -1) {
          message.error('网络超时');
        } else if (error.message == 'Network Error') {
          message.error('网络连接错误');
        } else {
          if (error.response.data) message.error(error.response.statusText);
          else message.error('接口路径找不到');
        }
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
  public get<ResData = any>(url: string, config?: any): Promise<ResData> {
    return this.instance.get<DTO<ResData>>(url, config).then(({ data }) => data.data);
  }

  /**
   * Post 请求
   * @param url
   * @param data
   * @param config
   * @returns {DTO.Data} 直接返回数据部分 return response.data.Data
   */
  public post<Params = any, ResData = any>(url: string, data: Params, config?: AxiosRequestConfig): Promise<ResData> {
    return this.instance.post<DTO<ResData>>(url, data, config).then(({ data }) => data.data);
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

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: ApiTimeout
});

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在这里可以添加一些请求前的操作
  const token = globalStore.userInfo?.token;
  // 在发送请求之前做些什么 token
  if (token) {
    config.headers['authorization'] = token;
  }
  return config;
});

// 添加响应拦截器
service.interceptors.response.use(
  /* 约束一下response */
  async (response: AxiosResponse<DTO>) => {
    const { headers, data } = response;
    if (headers['content-type']?.includes('application/json')) {
      // 服务端自定义的一套状态码，并不是真实的http状态码，如果处理http状态码错误，请至下面error错误函数中修改
      console.log('data', data);
      if (data.code !== 200) {
        const errorText = data.msg || HttpStatus[data.code as HttpStatusCode] || 'HTTP响应错误';
        // 401：token已失效
        if (data.code === 401) {
          Modal.info({
            title: '登录信息已失效，请重新登录！！！',
            okText: '确定',
            onOk() {
              globalStore.clearUserInfo();
              window.location.hash = '/login';
            }
          });
        }
        message.error(errorText);
        return Promise.reject(errorText);
      }
      message.success(data.msg);
    }
    return response;
  },
  error => {
    // 这里处理http状态码错误
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
      message.error('网络超时');
    } else if (error.message == 'Network Error') {
      message.error('网络连接错误');
    } else {
      if (error.response.data) message.error(error.response.statusText);
      else message.error('接口路径找不到');
    }
    return Promise.reject(error);
  }
);

export default new Request();
