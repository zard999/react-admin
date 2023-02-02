/*
 * @Author: zyh
 * @Date: 2023-02-02 10:08:58
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 11:04:13
 * @FilePath: /vite-project/src/layouts/components/menu/components/logo.tsx
 * @Description: Logo
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import logo from '@/assets/images/logo.png';

const Logo = () => {
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo-text">react Admin</h2>
    </div>
  );
};

export default Logo;
