/*
 * @Author: zyh
 * @Date: 2023-02-02 10:06:46
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-02 10:06:49
 * @FilePath: /vite-project/src/layouts/header/avatarIcon.tsx
 * @Description: avatar
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Avatar } from 'antd';
import avatar from '@/assets/images/avatar.png';

const AvatarIcon = () => {
  return <Avatar src={avatar} />;
};

export default AvatarIcon;
