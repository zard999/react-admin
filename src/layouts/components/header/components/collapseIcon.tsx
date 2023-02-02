/*
 * @Author: zyh
 * @Date: 2023-02-02 10:07:26
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:07:33
 * @FilePath: /vite-project/src/layouts/header/collapseIcon.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { MenuUnfoldOutlined } from '@ant-design/icons';

const CollapseIcon = () => {
  return (
    <div className="collapsed">
      <MenuUnfoldOutlined />
    </div>
  );
};

export default CollapseIcon;
