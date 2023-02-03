/*
 * @Author: zyh
 * @Date: 2023-02-02 20:49:50
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 11:28:14
 * @FilePath: /vite-project/src/config/index.ts
 * @Description: config
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
// 全局不动配置项 只做导出不做修改

// 首页地址（默认）
export const HOME_URL: string = '/home/index';

// 路由路径对应的中文名称
export const ROUTER_CONFIG: Record<string, string> = {
  home: '首页',
  proTable: '超级表格',
  useHooks1: '使用 Hooks1',
  useHooks2: '使用 Hooks2'
};
