/*
 * @Author: zyh
 * @Date: 2023-02-15 21:16:29
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-20 10:33:19
 * @FilePath: /vite-project/src/views/authorityManagement/user/userDialogForm/index.tsx
 * @Description: userDialogForm
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useEffect } from 'react';
import { Form, Input, Modal, Select, Button } from 'antd';
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import type { IAddUserFormData } from '../interface';
import './index.less';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

interface IProps {
  isModalOpen: boolean;
  title?: string;
  loading?: boolean;
  roleList: any[];
  handleOk: (addUserForm: IAddUserFormData, title: string) => void;
  handleCancel: () => void;
  dataRef?: any;
}

const UserDialogForm: React.FC<IProps> = observer(props => {
  const { isModalOpen, title, handleOk, handleCancel, loading, roleList, dataRef } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...dataRef
    });
  }, [dataRef]);

  // login
  const onFinish = (addUserForm: IAddUserFormData) => {
    console.log('form', form);
    if (dataRef.id) {
      addUserForm['id'] = dataRef.id;
    }
    handleOk(addUserForm, title as string);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal title={title} footer={null} open={isModalOpen} onCancel={handleCancel}>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        labelCol={{ span: 5 }}
        initialValues={dataRef}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
        autoComplete="off"
      >
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入姓名' }]}>
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password autoComplete="new-password" placeholder="请输入密码" />
        </Form.Item>
        <Form.Item label="角色" name="roleName" rules={[{ required: true, message: '请绑定角色' }]}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="请绑定角色"
            defaultValue={dataRef.roleName}
            options={roleList.map(item => ({ label: item.roleName, value: item.roleName }))}
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              form.resetFields();
              handleCancel();
            }}
            size="middle"
            icon={<CloseCircleOutlined />}
          >
            取消
          </Button>
          <Button loading={loading} size="middle" className="save-btn" type="primary" htmlType="submit" icon={<UserOutlined />}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default UserDialogForm;
