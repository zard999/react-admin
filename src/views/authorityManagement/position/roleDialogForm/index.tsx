/*
 * @Author: zyh
 * @Date: 2023-02-15 21:16:29
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 18:01:18
 * @FilePath: /vite-project/src/views/authorityManagement/position/roleDialogForm/index.tsx
 * @Description: userDialogForm
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useState } from 'react';
import { Form, Input, Modal, Button, TreeSelect } from 'antd';
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import { observer } from 'mobx-react';
import { globalStore } from '@/stores';
// import type { DataNode } from 'antd/es/tree';
import type { IAddRoleFormData } from '../interface';
import './index.less';

const { SHOW_ALL } = TreeSelect;

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
  handleOk: (addUserForm: IAddRoleFormData, form: FormInstance) => void;
  handleCancel: () => void;
}

const UserDialogForm: React.FC<IProps> = observer(props => {
  const { isModalOpen, title, handleOk, handleCancel, loading } = props;
  const { menuList } = globalStore;
  console.log('menuList', menuList);
  const [form] = Form.useForm();

  const [value, setValue] = useState(['0-0-0']);

  const onChange = (newValue: string[]) => {
    console.log('onChange ', value);
    setValue(newValue);
  };

  // login
  const onFinish = (addUserForm: IAddRoleFormData) => {
    console.log('form', addUserForm);
    handleOk(addUserForm, form);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const tProps = {
    treeData: menuList,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_ALL,
    placeholder: 'Please select',
    style: {
      width: '100%'
    }
  };

  return (
    <Modal title={title} footer={null} open={isModalOpen} onCancel={handleCancel}>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        labelCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
        autoComplete="off"
      >
        <Form.Item label="角色名称" name="roleName" rules={[{ required: true, message: '请输入角色名称' }]}>
          <Input placeholder="请输入角色名称" />
        </Form.Item>
        <Form.Item label="角色描述" name="description" rules={[{ required: true, message: '请输入角色描述' }]}>
          <Input placeholder="请输入角色描述" />
        </Form.Item>

        <Form.Item label="角色权限" name="permissions" rules={[{ required: true, message: '请输入角色描述' }]}>
          <TreeSelect {...tProps} />
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
