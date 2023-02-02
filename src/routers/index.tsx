/*
 * @Author: zyh
 * @Date: 2023-02-01 17:43:03
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:18:25
 * @FilePath: /vite-project/src/routers/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { lazy } from 'react';
import { RouteObject } from '@/routers/interface';
import { Navigate, useRoutes } from 'react-router-dom';
import lazyLoad from '@/components/lazyLoad/lazyLoad';
import LayoutIndex from '@/layouts';

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: lazyLoad(lazy(() => import('@/views/login'))),
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  {
    element: <LayoutIndex name="我是参数" />,
    children: [
      {
        path: '/home',
        element: lazyLoad(lazy(() => import('@/views/home')))
      }
    ]
  },
  {
    path: '/404',
    element: lazyLoad(lazy(() => import('@/views/notFound')))
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
