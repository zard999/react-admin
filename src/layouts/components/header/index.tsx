/*
 * @Author: zyh
 * @Date: 2023-02-02 10:04:11
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:42:13
 * @FilePath: /vite-project/src/layouts/components/header/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Layout } from 'antd';
import AvatarIcon from './components/avatarIcon';
import CollapseIcon from './components/collapseIcon';
import BreadcrumbNav from './components/breadcrumbNav';
import './index.less';

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header>
      <div className="header-lf">
        <CollapseIcon />
        <BreadcrumbNav />
      </div>
      <div className="header-ri">
        <AvatarIcon />
      </div>
    </Header>
  );
};
export default LayoutHeader;
