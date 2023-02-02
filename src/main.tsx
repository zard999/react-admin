/*
 * @Author: zyh
 * @Date: 2023-01-31 21:12:11
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:32:24
 * @FilePath: /vite-project/src/main.tsx
 * @Description: main
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/reset.css';
import '@/styles/common.less';
import '@/styles/reset.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
