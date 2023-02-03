/*
 * @Author: zyh
 * @Date: 2023-02-02 16:49:26
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 23:44:18
 * @FilePath: /vite-project/src/layouts/components/tabs/index.tsx
 * @Description: tabs
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { globalStore } from '@/stores';
import { observer } from 'mobx-react';
import { routerArray } from '@/routers';
import { searchRoute } from '@/utils';
import { Tabs, message } from 'antd';
import './index.less';

const LayoutTabs = observer(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeValue, setActiveValue] = useState('');
  const { themeConfig, tabsList } = globalStore;

  useEffect(() => {
    addTabs();
  }, [pathname]);

  // click tabs
  const clickTabs = (path: string) => {
    navigate(path);
  };

  // add tabs
  const addTabs = () => {
    const route = searchRoute(pathname, routerArray);
    let newTabsList = [...tabsList];
    console.log('route', pathname, route.path, newTabsList, tabsList);
    if (tabsList.every((item: any) => item.key !== route.path)) {
      newTabsList.push({ label: route.meta!.title, key: route.path });
    }
    console.log('route', route, newTabsList);
    globalStore.setTabsList(newTabsList);
    setActiveValue(pathname);
    console.log('newTabsList', newTabsList);
  };

  // delete tabs
  const delTabs = (tabPath: string) => {
    if (tabsList.length === 1) return;
    if (pathname === tabPath) {
      tabsList.forEach((item, index: number) => {
        if (item.key !== pathname) return;
        const nextTab = tabsList[index + 1] || tabsList[index - 1];
        console.log('tabsList', item.key, pathname, nextTab, index, tabsList);
        if (!nextTab) return;
        navigate(nextTab.key);
      });
    }
    message.success('你删除了Tabs标签 😆😆😆');
    globalStore.setTabsList(tabsList.filter((item: { key: string }) => item.key !== tabPath));
  };

  return (
    <Tabs
      activeKey={activeValue}
      onChange={clickTabs}
      hideAdd
      type="editable-card"
      onEdit={path => {
        console.log('onEdit', path);
        delTabs(path as string);
      }}
      items={tabsList}
      style={{ background: !themeConfig.isDarkMode ? '#fff' : undefined }}
    />
  );
});

export default LayoutTabs;
