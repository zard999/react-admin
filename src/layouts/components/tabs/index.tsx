/*
 * @Author: zyh
 * @Date: 2023-02-02 16:49:26
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 11:39:12
 * @FilePath: /vite-project/src/layouts/components/tabs/index.tsx
 * @Description: tabs
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Tabs } from 'antd';
import { useState } from 'react';
import { type Location } from 'react-router-dom';
import useLocationListen from '@/hooks/useLocationListen';
import './index.less';

const LayoutTabs = () => {
  const [activeValue, setActiveValue] = useState('');
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
    },
    {
      label: '数据可视化',
      key: '/dashboard'
    },
    {
      label: '内嵌页面',
      key: '/embedded'
    },
    {
      label: '基础 Form',
      key: '/basicForm'
    },
    {
      label: '校验 Form',
      key: '/validateForm'
    },
    {
      label: '动态 Form',
      key: '/dynamicForm'
    },
    {
      label: '水型图',
      key: '/waterChart'
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
    />
  );
};

export default LayoutTabs;
