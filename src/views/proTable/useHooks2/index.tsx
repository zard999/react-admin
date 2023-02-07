/*
 * @Author: zyh
 * @Date: 2023-02-01 17:44:57
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-07 18:17:55
 * @FilePath: /vite-project/src/views/proTable/useHooks2/index.tsx
 * @Description: login
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { getUserInfo } from '@/api/modules/user';
import { useRequest } from 'ahooks';
import { Button } from 'antd';
import './index.less';
const Login = () => {
  const { loading, run } = useRequest(getUserInfo, {
    manual: true, // 手动触发
    onSuccess: (result, palams) => {
      console.log('result', result, palams);
    }
  });
  return (
    <div>
      useHooks2
      <Button loading={loading} onClick={() => run()} type="primary">
        获取用户信息
      </Button>
    </div>
  );
};

export default Login;
