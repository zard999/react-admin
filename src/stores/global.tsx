/*
 * @Author: zyh
 * @Date: 2023-02-02 17:27:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 21:33:20
 * @FilePath: /vite-project/src/stores/global.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { makeAutoObservable } from 'mobx';

class Global {
  permissions: any[] = ['/home', '/home/index', '/proTable', '/proTable/useHooks1', '/proTable/useHooks2'];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Global();
