import LayoutIndex from '@/layouts';
import lazyLoad from '@/components/lazyLoad';
import { lazy } from 'react';
import { TableOutlined } from '@ant-design/icons';
const homeRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '超级表格',
      icon: <TableOutlined />
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
