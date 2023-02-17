/*
 * @Author: zyh
 * @Date: 2023-02-17 15:27:21
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 15:33:46
 * @FilePath: /vite-project/src/api/modules/role.ts
 * @Description: 角色相关接口
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import request from '@/utils/request';

// 新增角色
export const addRole = async (params: Expand<API.AddRoleParams>) => request.post('role/addRole', params);

// 获取角色列表
export const getRoleList = async (params: Expand<API.ListParams>) => request.get('role/getRoleList', params);
