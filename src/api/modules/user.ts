/*
 * @Author: zyh
 * @Date: 2023-02-04 12:32:18
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 15:33:38
 * @FilePath: /vite-project/src/api/modules/user.ts
 * @Description: login api
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import request from '@/utils/request';

// 登录
export const login = async (params: Expand<API.LoginParams>) =>
  request.post<any, ExpandRecursively<API.LoginData>>('/user/login', params);

// 获取用户信息
export const getUserInfo = async () => request.get('/user/getUserInfo');

// 获取用户列表
export const getUserList = async (params: Expand<API.ListParams>) =>
  request.get('/user/getUserList', {
    params
  });

// 新增用户
export const addUser = async (params: Expand<API.AddUserParams>) => request.post('/user/register', params);
