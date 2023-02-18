/*
 * @Author: zyh
 * @Date: 2023-02-17 15:20:20
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 19:03:50
 * @FilePath: /vite-project/src/views/authorityManagement/position/interface/index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
export type IAddRoleFormData = {
  id: number;
  roleName: string;
  description: string;
  permissions: string;
};
