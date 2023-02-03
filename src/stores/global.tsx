/*
 * @Author: zyh
 * @Date: 2023-02-02 17:27:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 23:08:46
 * @FilePath: /vite-project/src/stores/global.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { makeAutoObservable } from 'mobx';

interface IThemeConfig {
  themeColor: string; // 主题色
  isDarkMode: boolean; // 是否是暗黑模式
  isWeakMode: boolean; // 是否是弱光模式
  isGrayMode: boolean; // 是否是灰色模式
}

class Global {
  permissions: any[] = ['/home', '/home/index', '/proTable', '/proTable/useHooks1', '/proTable/useHooks2']; // 权限列表
  // 路径对应的中文名称
  pathNameMap: Record<string, string> = {};
  userInfo: any = {}; // 用户信息
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

  setPathNameMap(pathNameMap: Record<string, string>) {
    this.pathNameMap = pathNameMap;
  }

  setMenuList(menuList: any[]) {
    this.menuList = menuList;
  }
}

export default new Global();
