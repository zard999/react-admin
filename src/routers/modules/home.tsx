/*
 * @Author: zyh
 * @Date: 2023-02-02 17:44:00
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 23:48:43
 * @FilePath: /vite-project/src/routers/modules/home.tsx
 * @Description: home路由
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import LayoutIndex from '@/layouts';
import lazyLoad from '@/components/lazyLoad';
import { lazy } from 'react';
import { HomeOutlined } from '@ant-design/icons';
const homeRouter = [
  {
    element: <LayoutIndex />,
    path: '/home',
    meta: {
      title: '首页',
      icon: <HomeOutlined />
    },
    children: [
      {
        path: '/home/index',
        element: lazyLoad(lazy(() => import('@/views/home'))),
        meta: {
          title: '首页'
        }
      }
    ]
  }
];

export default homeRouter;
