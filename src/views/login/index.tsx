/*
 * @Author: zyh
 * @Date: 2023-02-01 17:44:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-04 12:57:26
 * @FilePath: /vite-project/src/views/login/index.tsx
 * @Description: login
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import LoginForm from './components/loginForm';
import logo from '@/assets/images/logo.png';

import './index.less';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">React-Admin</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
