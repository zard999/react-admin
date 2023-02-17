import LayoutIndex from '@/layouts';
import lazyLoad from '@/components/lazyLoad';
import { lazy } from 'react';
import { TableOutlined } from '@ant-design/icons';
const authorityManagementRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '权限管理',
      icon: <TableOutlined />,
      sort: 3
    },
    path: '/authorityManagement',
    children: [
      {
        path: '/authorityManagement/user',
        element: lazyLoad(lazy(() => import('@/views/authorityManagement/user'))),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/authorityManagement/position',
        element: lazyLoad(lazy(() => import('@/views/authorityManagement/position'))),
        meta: {
          title: '角色管理'
        }
      }
    ]
  }
];

export default authorityManagementRouter;
