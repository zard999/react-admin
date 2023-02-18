/*
 * @Author: zyh
 * @Date: 2023-02-04 12:39:35
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-18 16:13:44
 * @FilePath: /vite-project/src/types/api.d.ts
 * @Description: 请求数据类型定义
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
declare namespace API {
  interface Article {
    id?: string;
    owner?: string;
    title?: string;
    avatar?: string;
    cover?: string;
    status?: string;
    percent?: string;
    logo?: string;
    href?: string;
    updatedAt?: number;
    createdAt?: number;
    subDescription?: string;
    description?: string;
    activeUser?: string;
    newUser?: string;
    star?: string;
    like?: string;
    message?: string;
    content?: string;
    members?: Array<{
      avatar: string;
      name: string;
      id: string;
    }>;
  }
  type ArticleList = Article[];

  type AnalysisChartData = {
    visitData?: any[];
    visitData2?: any[];
    salesData?: any[];
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    clickClose?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  interface UserInfo {
    avatar: string;
    id: number;
    signature: string;
    token: string;
    username: string;
  }

  interface RoleInfo {
    id: number;
    roleName: string;
    description: string;
    ctime: string;
  }

  interface LoginData {
    avatar: string;
    id: number;
    signature: string;
    token: string;
    username: string;
  }

  interface LoginParams {
    username: string;
    password: string;
  }

  interface AddUserParams {
    username: string;
    password: string;
  }

  interface AddRoleParams {
    roleName: string;
    description: string;
    permissions: string;
  }

  interface RoleListData {
    list: Array<RoleInfo>;
    current: number;
    pageSize: number;
    total: number;
  }

  // 表格查询参数
  interface ListParams {
    current: number;
    pageSize: number;
  }

  interface UserListData {
    list: Array<UserInfo>;
    current: number;
    pageSize: number;
    total: number;
  }
}
