/*
 * @Author: zyh
 * @Date: 2023-02-15 21:16:29
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-16 11:12:40
 * @FilePath: /vite-project/src/views/authorityManagement/user/userDialogForm/index.tsx
 * @Description: userDialogForm
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { Form, Input, Modal, Select, Button } from 'antd';
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import { observer } from 'mobx-react';
import type { IAddUserFormData } from '../interface';
import './index.less';

const { Option } = Select;

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
  handleOk: (addUserForm: IAddUserFormData, form: FormInstance) => void;
  handleCancel: () => void;
}

const UserDialogForm: React.FC<IProps> = observer(props => {
  const { isModalOpen, title, handleOk, handleCancel, loading } = props;
  const [form] = Form.useForm();

  // login
  const onFinish = (addUserForm: IAddUserFormData) => {
    console.log('form', form);
    handleOk(addUserForm, form);
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
        initialValues={{ remember: true }}
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
        <Form.Item label="职位" name="position">
          <Select placeholder="请选择职位" allowClear>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
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
