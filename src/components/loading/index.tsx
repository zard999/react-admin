/*
 * @Author: zyh
 * @Date: 2023-02-02 10:01:34
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:01:51
 * @FilePath: /vite-project/src/components/loading/index.tsx
 * @Description: Loading
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Spin } from 'antd';
import './index.less';

const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return <Spin tip={tip} size="large" className="request-loading" />;
};

export default Loading;
