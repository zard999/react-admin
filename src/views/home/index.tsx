/*
 * @Author: zyh
 * @Date: 2023-02-01 17:44:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-03 10:10:57
 * @FilePath: /vite-project/src/views/home/index.tsx
 * @Description: Home
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { observer } from 'mobx-react';
import welcome from '@/assets/images/welcome.png';
import './index.less';
const Home = observer(() => {
  return (
    <div className="home">
      <img src={welcome} alt="" />
    </div>
  );
});

export default Home;
