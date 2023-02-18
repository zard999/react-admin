/*
 * @Author: zyh
 * @Date: 2023-02-15 21:16:29
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-18 19:21:48
 * @FilePath: /vite-project/src/views/authorityManagement/position/roleDialogForm/index.tsx
 * @Description: userDialogForm
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Form, Input, Modal, Button, TreeSelect } from 'antd';
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import { observer } from 'mobx-react';
// import type { DataNode } from 'antd/es/tree';
import { treePermissions } from '@/routers';
import type { IAddRoleFormData } from '../interface';
import './index.less';
import { useEffect } from 'react';

const { SHOW_ALL } = TreeSelect;
const { TextArea } = Input;

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
  handleOk: (addUserForm: IAddRoleFormData, form: FormInstance, title: string) => void;
  handleCancel: () => void;
  dataRef?: any;
}

const UserDialogForm: React.FC<IProps> = observer(props => {
  const { isModalOpen, title, handleOk, handleCancel, loading, dataRef } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...dataRef
    });
  }, [dataRef]);

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
  };

  // save
  const onFinish = (addUserForm: IAddRoleFormData) => {
    console.log('form', addUserForm);
    if (dataRef.id) {
      addUserForm['id'] = dataRef.id;
    }
    handleOk(addUserForm, form, title as string);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const tProps = {
    treeData: treePermissions,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_ALL,
    placeholder: '请选择角色权限',
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
        initialValues={dataRef}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
        autoComplete="off"
      >
        <Form.Item label="角色名称" name="roleName" rules={[{ required: true, message: '请输入角色名称' }]}>
          <Input placeholder="请输入角色名称" />
        </Form.Item>
        <Form.Item label="角色描述" name="description" rules={[{ required: true, message: '请输入角色描述' }]}>
          <TextArea rows={4} placeholder="请输入角色描述" />
        </Form.Item>

        <Form.Item label="角色权限" name="permissions" rules={[{ required: true, message: '请输入角色描述' }]}>
          <TreeSelect {...tProps} />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              // form.resetFields();
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
