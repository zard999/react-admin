/*
 * @Author: zyh
 * @Date: 2023-02-02 20:49:50
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 21:17:41
 * @FilePath: /vite-project/src/config/index.ts
 * @Description: config
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
// 全局不动配置项 只做导出不做修改

// 首页地址（默认）
export const HOME_URL: string = '/home/index';

// 权限id对应路由
export const AUTH_ROUTER: Record<string, string> = {
  '/home/index': '100',
  '/proTable': '200',
  '/proTable/useHooks1': '201',
  '/proTable/useHooks2': '202'
};
