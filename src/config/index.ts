/*
 * @Author: zyh
 * @Date: 2023-02-02 20:49:50
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 17:46:22
 * @FilePath: /vite-project/src/config/index.ts
 * @Description: config配置文件
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
// 全局不动配置项 只做导出不做修改

// 首页地址（默认）
export const HOME_URL: string = '/home/index';

// 路由路径对应的中文名称
export const ROUTER_CONFIG: Record<string, string> = {
  index: '首页',
  proTable: '超级表格',
  useHooks1: '使用 Hooks1',
  useHooks2: '使用 Hooks2'
};

// 应用相关
export const ThemeColors = ['#1677ff', '#ee3f4d', '#c08eaf', '#95509f', '#722ed1', '#00b96b', '#7cb305', '#13c2c2', '#d6a01d'];
