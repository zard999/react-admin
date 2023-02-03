/*
 * @Author: zyh
 * @Date: 2023-02-02 16:49:26
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 16:51:40
 * @FilePath: /vite-project/src/layouts/components/tabs/index.tsx
 * @Description: tabs
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useState } from 'react';
import { type Location } from 'react-router-dom';
import { globalStore } from '@/stores';
import { observer } from 'mobx-react';
import { Tabs } from 'antd';
import useLocationListen from '@/hooks/useLocationListen';
import './index.less';

const LayoutTabs = observer(() => {
  const [activeValue, setActiveValue] = useState('');
  const { themeConfig } = globalStore;
  const [tabsList] = useState([
    {
      label: '首页',
      key: '/home'
    },
    {
      label: '超级表格',
      key: '/proTable'
    },
    {
      label: '数据大屏',
      key: '/dataScreen'
    },
    {
      label: '使用 Hooks',
      key: '/useHooks'
    },
    {
      label: '使用 Component',
      key: '/useComponent'
    }
  ]);

  useLocationListen((location: Location) => {
    const { pathname } = location;
    setActiveValue(pathname);
  });

  const tabsClick = (path: string) => {
    console.log(path);
  };

  const delTabs = (path: string) => {
    console.log(path);
  };

  return (
    <Tabs
      activeKey={activeValue}
      onChange={tabsClick}
      hideAdd
      type="editable-card"
      onEdit={path => {
        delTabs(path as string);
      }}
      items={tabsList}
      style={{ background: !themeConfig.isDarkMode ? '#fff' : undefined }}
    />
  );
});

export default LayoutTabs;
