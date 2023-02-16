/*
 * @Author: zyh
 * @Date: 2023-02-02 18:18:45
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-15 13:43:29
 * @FilePath: /vite-project/src/routers/modules/proTable.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import LayoutIndex from '@/layouts';
import lazyLoad from '@/components/lazyLoad';
import { lazy } from 'react';
import { TableOutlined } from '@ant-design/icons';
const homeRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '超级表格',
      icon: <TableOutlined />,
      sort: 2
    },
    path: '/proTable',
    children: [
      {
        path: '/proTable/useHooks1',
        element: lazyLoad(lazy(() => import('@/views/proTable/useHooks1'))),
        meta: {
          title: '使用 Hooks1'
        }
      },
      {
        path: '/proTable/useHooks2',
        element: lazyLoad(lazy(() => import('@/views/proTable/useHooks2'))),
        meta: {
          title: '使用 Hooks2'
        }
      }
    ]
  }
];

export default homeRouter;
