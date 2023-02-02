/*
 * @Author: zyh
 * @Date: 2023-02-02 10:04:20
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 21:31:30
 * @FilePath: /vite-project/src/layouts/components/menu/index.tsx
 * @Description: menu
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, type MenuProps } from 'antd';
import Logo from './components/logo';
import { rootRouter } from '@/routers';
import { globalStore } from '@/stores';
import './index.less';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

// 递归处理Menu数据
const handleMenuData = (rootRouter: any[], authRouter: any[], newArr: MenuItem[] = []) => {
  rootRouter.forEach(item => {
    console.log('item', rootRouter, item.path);
    if (authRouter.includes(item.path)) {
      if (!item?.children?.length) {
        let currentItem = getItem(item?.meta?.title, item.path, item?.meta?.icon);
        return newArr.push(currentItem);
      }
      // 一个子路由时特殊处理
      if (item?.children?.length === 1) {
        let currentItem = getItem(item?.meta?.title, item.children[0].path, item?.meta?.icon);
        return newArr.push(currentItem);
      }
      newArr.push(getItem(item?.meta?.title, item.path, item?.meta?.icon, handleMenuData(item?.children, authRouter)));
    }
  });
  return newArr;
};

const LayoutMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { permissions } = globalStore;
  const [menuActive, setMenuActive] = useState(pathname);
  const [menuList, setMenuList] = useState<any[]>([]);

  useEffect(() => {
    console.log('pathname', pathname);
    setMenuActive(pathname);
    setMenuList(handleMenuData(rootRouter, permissions));
  }, [pathname]);

  return (
    <div className="menu">
      <Logo></Logo>
      <Menu
        theme="dark"
        mode="inline"
        triggerSubMenuAction="click"
        selectedKeys={[menuActive]}
        defaultOpenKeys={[menuActive]}
        items={menuList}
        onClick={({ key }) => {
          if (key) {
            navigate(key);
          }
        }}
      />
    </div>
  );
};

export default LayoutMenu;