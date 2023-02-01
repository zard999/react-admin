/*
 * @Author: zyh
 * @Date: 2023-02-01 21:45:56
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-01 21:46:05
 * @FilePath: /vite-project/src/routers/utils/lazyLoad.tsx
 * @Description: 路由懒加载
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Suspense } from 'react';
import { Spin } from 'antd';

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        />
      }
    >
      <Comp />
    </Suspense>
  );
};

export default lazyLoad;
