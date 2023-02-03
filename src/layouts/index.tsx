/*
 * @Author: zyh
 * @Date: 2023-02-02 10:02:48
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 15:39:48
 * @FilePath: /vite-project/src/layouts/index.tsx
 * @Description: Layout
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Outlet } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from 'antd';
import { globalStore } from '@/stores';
import { observer } from 'mobx-react';
import LayoutMenu from './components/menu';
import LayoutHeader from './components/header';
import LayoutTabs from './components/tabs';
import LayoutFooter from './components/footer';
import './index.less';
import { useEffect } from 'react';

const { Sider, Content } = Layout;

const LayoutIndex = observer(() => {
  // const { pathname } = useLocation();
  const { isCollapse } = globalStore;

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth;
        if (!isCollapse && screenWidth < 1200) globalStore.setIsCollapse(true);
        if (!isCollapse && screenWidth > 1200) globalStore.setIsCollapse(false);
      })();
    };
  };

  useEffect(() => {
    listeningWindow();
  }, []);

  return (
    <Layout hasSider>
      <Sider width={260} collapsedWidth={80} trigger={null} collapsed={isCollapse}>
        <div
          style={{
            overflowY: 'auto',
            height: '100vh',
            position: 'sticky',
            top: 0
          }}
        >
          <LayoutMenu></LayoutMenu>
        </div>
      </Sider>
      <Layout className="site-layout">
        <LayoutHeader></LayoutHeader>
        <LayoutTabs></LayoutTabs>
        <Content className="site-content">
          <Outlet></Outlet>
        </Content>
        <LayoutFooter></LayoutFooter>
      </Layout>
    </Layout>
  );
});

export default LayoutIndex;
