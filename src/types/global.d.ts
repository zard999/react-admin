/*
 * @Author: zyh
 * @Date: 2023-02-01 13:37:30
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-04 12:01:59
 * @FilePath: /vite-project/src/types/global.d.ts
 * @Description: global.d.ts
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
// * Menu
declare namespace Menu {
  interface MenuOptions {
    path: string;
    title: string;
    icon?: string;
    isLink?: string;
    close?: boolean;
    children?: MenuOptions[];
  }
}

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_API_URL: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_GLOB_APP_TITLE: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_PROXY_URL: string;
  VITE_BUILD_GZIP: boolean;
  VITE_REPORT: boolean;
}

// * Dropdown MenuInfo
declare interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

declare module 'js-md5';
