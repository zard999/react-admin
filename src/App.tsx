/*
 * @Author: zyh
 * @Date: 2023-02-01 16:28:52
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 20:55:18
 * @FilePath: /vite-project/src/App.tsx
 * @Description: App.tsx
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import Router from './routers';
import AuthRouter from './routers/authRouter';

const App = () => {
  return (
    <AuthRouter>
      <Router />
    </AuthRouter>
  );
};

export default App;
