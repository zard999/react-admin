/*
 * @Author: zyh
 * @Date: 2023-02-02 17:27:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 09:15:03
 * @FilePath: /vite-project/src/stores/global.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { makeAutoObservable } from 'mobx';

class Global {
  permissions: any[] = ['/home', '/home/index', '/proTable', '/proTable/useHooks1', '/proTable/useHooks2']; // 权限列表
  isCollapse: boolean = false; // 侧边栏是否折叠

  constructor() {
    makeAutoObservable(this);
  }

  setIsCollapse(isCollapse: boolean) {
    this.isCollapse = isCollapse;
  }
}

export default new Global();
