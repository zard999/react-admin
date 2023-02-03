/*
 * @Author: zyh
 * @Date: 2023-02-02 10:07:26
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 09:19:53
 * @FilePath: /vite-project/src/layouts/components/header/components/collapseIcon.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { globalStore } from '@/stores';
import { observer } from 'mobx-react';

const CollapseIcon = observer(() => {
  const { isCollapse } = globalStore;
  return (
    <div
      className="collapsed"
      onClick={() => {
        globalStore.setIsCollapse(!isCollapse);
      }}
    >
      {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  );
});

export default CollapseIcon;
