/*
 * @Author: zyh
 * @Date: 2023-02-02 20:43:52
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-04 11:49:08
 * @FilePath: /vite-project/src/routers/authRouter.tsx
 * @Description: 路由守卫组件
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useLocation, Navigate } from 'react-router-dom';
import { globalStore } from '@/stores';

/**
 * @description 路由守卫组件
 * */
const AuthRouter = (props: { children: JSX.Element }) => {
  // * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
  const { permissions } = globalStore;

  const { pathname } = useLocation();

  // * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
  const staticRouter = ['/404', '/', '/login'];
  const routerList = permissions.concat(staticRouter);
  // * 如果访问的地址没有在路由表中重定向到404页面
  console.log('routerList', routerList, pathname);
  if (routerList.indexOf(pathname) == -1) return <Navigate to="/404" />;

  // * 当前账号有权限返回 Router，正常访问页面
  return props.children;
};

export default AuthRouter;
