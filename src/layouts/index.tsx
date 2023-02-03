/*
 * @Author: zyh
 * @Date: 2023-02-02 10:02:48
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 10:08:04
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
    <Layout>
      <Sider trigger={null} collapsible collapsed={isCollapse}>
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <LayoutTabs></LayoutTabs>
        <Content>
          {/* TransitionGroup 会导致 useEffect 加载两次 && 使用路由懒加载第一次进入没有动画，所以暂时不用过渡动画了 */}
          {/* <TransitionGroup className="container"> */}
          {/* exit：表示退出当前页面的时候是否有动画 */}
          {/* <CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}> */}
          <Outlet></Outlet>
          {/* </CSSTransition> */}
          {/* </TransitionGroup> */}
        </Content>
        <LayoutFooter></LayoutFooter>
      </Layout>
    </Layout>
  );
});

export default LayoutIndex;
