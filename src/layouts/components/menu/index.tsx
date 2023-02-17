/*
 * @Author: zyh
 * @Date: 2023-02-02 10:04:20
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 17:58:35
 * @FilePath: /vite-project/src/layouts/components/menu/index.tsx
 * @Description: menu
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useEffect, useState } from 'react';
import { useNavigate, type Location } from 'react-router-dom';
import { rootRouter } from '@/routers';
import { globalStore } from '@/stores';
import { observer } from 'mobx-react';
import useLocationListen from '@/hooks/useLocationListen';
import { Menu, type MenuProps } from 'antd';
import Logo from './components/logo';
import './index.less';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  title: React.ReactNode,
  value: React.Key,
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
    type,
    title,
    value
  } as MenuItem;
}

// 递归处理Menu数据
const handleMenuData = (rootRouter: any[], authRouter: any[], newArr: MenuItem[] = []) => {
  rootRouter.forEach(item => {
    console.log('item', rootRouter, item.path);
    if (authRouter.includes(item.path)) {
      if (!item?.children?.length) {
        let currentItem = getItem(item?.meta?.title, item?.meta?.title, item.path, item.path, item?.meta?.icon);
        return newArr.push(currentItem);
      }
      // 一个子路由时特殊处理
      if (item?.children?.length === 1) {
        let currentItem = getItem(
          item?.meta?.title,
          item?.meta?.title,
          item.children[0].path,
          item.children[0].path,
          item?.meta?.icon
        );
        return newArr.push(currentItem);
      }
      newArr.push(
        getItem(
          item?.meta?.title,
          item?.meta?.title,
          item.path,
          item.path,
          item?.meta?.icon,
          handleMenuData(item?.children, authRouter)
        )
      );
    }
  });
  return newArr;
};

const LayoutMenu = observer(() => {
  const navigate = useNavigate();
  const { permissions, isCollapse, menuList } = globalStore;
  const [menuActive, setMenuActive] = useState('');

  useEffect(() => {
    globalStore.setMenuList(handleMenuData(rootRouter, permissions));
  }, []);

  useLocationListen((location: Location) => {
    const { pathname } = location;
    setMenuActive(pathname);
  });

  return (
    <div className="menu">
      <Logo isCollapse={isCollapse} />
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
});

export default LayoutMenu;
