/*
 * @Author: zyh
 * @Date: 2023-02-04 12:32:18
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-04 12:40:36
 * @FilePath: /vite-project/src/api/modules/login.ts
 * @Description: login api
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import request from '@/utils/request';

// 登录
export const login = async (params: Expand<API.LoginParams>) =>
  request.post<any, ExpandRecursively<API.LoginData>>('/User/Login', params);
