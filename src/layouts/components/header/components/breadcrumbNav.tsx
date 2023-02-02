/*
 * @Author: zyh
 * @Date: 2023-02-02 10:07:14
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:07:17
 * @FilePath: /vite-project/src/layouts/header/breadcrumbNav.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Breadcrumb } from 'antd';

const BreadcrumbNav = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
