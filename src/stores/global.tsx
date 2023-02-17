/*
 * @Author: zyh
 * @Date: 2023-02-02 17:27:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 17:33:17
 * @FilePath: /vite-project/src/stores/global.tsx
 * @Description: globalStore
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

interface IThemeConfig {
  themeColor: string; // 主题色
  isDarkMode: boolean; // 是否是暗黑模式
  isWeakMode: boolean; // 是否是弱光模式
  isGrayMode: boolean; // 是否是灰色模式
}

class Global {
  permissions: any[] = [
    '/home/index',
    '/proTable',
    '/proTable/useHooks1',
    '/proTable/useHooks2',
    '/authorityManagement',
    '/authorityManagement/user',
    '/authorityManagement/position'
  ]; // 权限列表
  userInfo: Record<string, any> = {}; // 用户信息
  isCollapse: boolean = false; // 侧边栏是否折叠
  themeConfig: IThemeConfig = {
    themeColor: '#1677ff',
    isDarkMode: false,
    isWeakMode: false,
    isGrayMode: false
  }; // 主题相关配置
  tabsList: any[] = []; // 标签页列表
  menuList: any[] = []; // 菜单列表

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'global',
      properties: ['permissions', 'userInfo', 'themeConfig', 'tabsList', 'menuList'],
      storage: window.localStorage
    });
  }

  setIsCollapse(isCollapse: boolean) {
    this.isCollapse = isCollapse;
  }

  setThemeConfig(themeConfig: IThemeConfig) {
    this.themeConfig = themeConfig;
  }

  setTabsList(tabsList: any[]) {
    this.tabsList = tabsList;
  }

  setMenuList(menuList: any[]) {
    this.menuList = menuList;
  }

  // 设置用户信息
  setUserInfo(userInfo: Record<string, any>) {
    this.userInfo = userInfo;
  }

  // 清除用户信息
  clearUserInfo() {
    this.userInfo = {};
  }
}

export default new Global();
