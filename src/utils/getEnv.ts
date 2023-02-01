/*
 * @Author: zyh
 * @Date: 2023-02-01 13:35:15
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-01 14:25:51
 * @FilePath: /vite-project/src/utils/getEnv.ts
 * @Description: getEnv
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
// 读取所有环境变量配置文件到process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
        console.log(error);
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

/**
 * 是否生成包预览
 */
export function isReportMode(): boolean {
  return process.env.VITE_REPORT === 'true';
}
