/*
 * @Author: zyh
 * @Date: 2023-02-04 12:39:35
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-19 22:13:20
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

  // 用户信息
  interface UserInfo {
    avatar: string;
    id: number;
    signature: string;
    token: string;
    username: string;
  }

  // 角色信息
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

  // 登录需要传的参数
  interface LoginParams {
    username: string;
    password: string;
  }

  // 添加用户需要传的参数
  interface AddUserParams {
    username: string;
    password: string;
  }

  // 添加角色需要传的参数
  interface AddRoleParams {
    roleName: string;
    description: string;
    permissions: string;
  }

  // 编辑角色信息需要传的参数
  interface EditRoleParams {
    id: number;
    roleName: string;
    description: string;
    permissions: string;
  }

  // 查询角色列表需要传的参数
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

  // 查询用户列表需要传的参数
  interface UserListData {
    list: Array<UserInfo>;
    current: number;
    pageSize: number;
    total: number;
  }

  // 根据用户id查询当前用户绑定的角色需要传的参数
  interface GetRoleByUserIdParams {
    id: number;
  }

  // 编辑用户信息需要传的参数
  interface EditUserInfoParams {
    username: string;
    id: number;
    password: string;
    roleName: string[];
  }
}
