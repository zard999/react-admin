/*
 * @Author: zyh
 * @Date: 2023-02-01 17:43:03
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-01 23:05:13
 * @FilePath: /vite-project/src/routers/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { RouteObject } from '@/routers/interface';
import { Navigate, useRoutes } from 'react-router-dom';
import lazyLoad from '@/components/lazyLoad/lazyLoad';
import { lazy } from 'react';

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
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
