/*
 * @Author: zyh
 * @Date: 2023-02-17 15:27:21
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-18 19:05:32
 * @FilePath: /vite-project/src/api/modules/role.ts
 * @Description: 角色相关接口
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import request from '@/utils/request';

// 新增角色
export const addRole = async (params: Expand<API.AddRoleParams>) => request.post('role/addRole', params);

// 获取角色列表
export const getRoleList = async (params?: Expand<API.ListParams>) => request.get('role/getRoleList', { params });

// 获取用户对应角色的权限信息
export const getRolePermissions = async (params?: { id: number }) => request.get('role/getRolePermissions', { params });

// 编辑角色信息
export const editRoleInfo = async (params: Expand<API.EditRoleParams>) => request.post('role/editRoleInfo', params);
