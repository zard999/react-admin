/*
 * @Author: zyh
 * @Date: 2023-02-02 10:06:46
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-07 17:30:41
 * @FilePath: /vite-project/src/layouts/components/header/components/personalCenter.tsx
 * @Description: avatar
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useNavigate } from 'react-router-dom';
import { globalStore } from '@/stores';
import { Avatar, Modal, Dropdown, message, type MenuProps } from 'antd';
import { ExclamationCircleOutlined, FormOutlined, PoweroffOutlined, IdcardOutlined, DownOutlined } from '@ant-design/icons';
import avatar from '@/assets/images/avatar.png';

const enum PersonalCenterMenuKeys {
  MyInfo = 'MYINFO',
  ModifyPassword = 'MODIFYPASSWORD',
  Logout = 'LOGOUT'
}
const PersonalCenter = () => {
  const navigate = useNavigate();
  const { userInfo } = globalStore;

  const items: MenuProps['items'] = [
    {
      key: PersonalCenterMenuKeys.MyInfo,
      label: '我的信息',
      icon: <IdcardOutlined />
    },
    {
      key: PersonalCenterMenuKeys.ModifyPassword,
      label: '修改密码',
      icon: <FormOutlined />
    },
    { type: 'divider' },
    {
      key: PersonalCenterMenuKeys.Logout,
      danger: true,
      label: '退出登录',
      icon: <PoweroffOutlined />
    }
  ];
  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        message.success('退出登录成功！');
        globalStore.clearUserInfo();
        navigate('/login');
      }
    });
  };

  return (
    <>
      <Dropdown
        menu={{
          items,
          style: { width: 110 },
          onClick: e => {
            switch (e.key) {
              case PersonalCenterMenuKeys.MyInfo:
                break;
              case PersonalCenterMenuKeys.ModifyPassword:
                break;
              case PersonalCenterMenuKeys.Logout:
                // 清楚硬盘（如：localStorage）中的所有数据
                logout();
                break;
            }
          }
        }}
        placement="bottom"
        arrow
        trigger={['hover']}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <Avatar size="large" src={userInfo?.avatar || avatar} />
          <span
            style={{
              margin: '0 10px'
            }}
            className="username"
          >
            {userInfo?.username}
          </span>
          <DownOutlined />
        </div>
      </Dropdown>
    </>
  );
};

export default PersonalCenter;
