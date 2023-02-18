/*
 * @Author: zyh
 * @Date: 2023-02-15 14:27:49
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-18 14:37:33
 * @FilePath: /vite-project/src/views/authorityManagement/user/index.tsx
 * @Description: User
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useState, useEffect } from 'react';
import { Card, Input, Button, Table } from 'antd';
import UserDialogForm from './userDialogForm';
import { observer } from 'mobx-react';
import { useRequest } from 'ahooks';
import { getUserList, addUser } from '@/api/modules/user';
import { getRoleList } from '@/api/modules/role';
import moment from 'moment';
import type { IAddUserFormData } from './interface';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const { Search } = Input;

const columns = [
  {
    title: '用户名称',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '个性签名',
    dataIndex: 'signature',
    key: 'signature'
  },
  {
    title: '创建时间',
    dataIndex: 'ctime',
    key: 'ctime'
  }
];

const User = observer(() => {
  const [tableData, setTableData] = useState<Record<string, any>>({
    list: [],
    current: 1,
    pageSize: 10,
    total: 0
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleList, setRoleList] = useState([]);

  // 获取用户列表
  const { run, loading } = useRequest(getUserList, {
    manual: true,
    defaultParams: [
      {
        current: 1,
        pageSize: 10
      }
    ],
    onSuccess: (result, params) => {
      setTableData({
        ...result,
        list: result.list.map((item: any) => ({ ...item, ctime: moment(+item.ctime).format('YYYY-MM-DD HH:mm:ss') }))
      });
      console.log('params', result, params);
    }
  });

  // 获取角色列表
  const roleObj = useRequest(getRoleList, {
    manual: true,
    onSuccess: (result, params) => {
      setRoleList(result);
      console.log('getRoleList', result, params);
    }
  });

  // 新增用户
  const addUserObj = useRequest(addUser, {
    manual: true, // 手动触发
    onSuccess: (result, params) => {
      console.log('addUser', result, params);
    }
  });
  useEffect(() => {
    run({
      current: 1,
      pageSize: 10
    });
  }, []);
  const onSearch = (value: string) => console.log(value);
  const handleTableChange = () => {};
  const showModal = () => {
    roleObj.run();
    setIsModalOpen(true);
  };

  const handleOk = async (addUserForm: IAddUserFormData, form: FormInstance) => {
    try {
      await addUserObj.runAsync(addUserForm);
      form.resetFields();
      setIsModalOpen(false);
      run({
        current: tableData.current,
        pageSize: tableData.pageSize
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Card bordered={false}>
        <div className="header">
          <Search placeholder="请输入用户名称关键词" loading={false} onSearch={onSearch} style={{ width: 200 }} />
          <div></div>
          <Button type="primary" loading={false} onClick={showModal}>
            新增用户
          </Button>
        </div>
        <div>
          <Table
            columns={columns}
            rowKey={record => record.id}
            dataSource={tableData.list}
            pagination={{
              position: ['bottomRight'],
              defaultCurrent: 1,
              pageSize: tableData.pageSize,
              current: tableData.current,
              total: tableData.total,
              showTotal: total => `共${total}条`,
              itemRender: (current, type, originalElement) => {
                if (type === 'prev') {
                  return <a>上一页</a>;
                }
                if (type === 'next') {
                  return <a>下一页</a>;
                }
                return originalElement;
              },
              onChange: (page, pageSize) => {
                run({
                  current: page,
                  pageSize
                });
                console.log('onChange', page, pageSize);
              }
              // onShowSizeChange: (current, size) => {
              //   console.log(current, size);
              // }
            }}
            loading={loading}
            onChange={handleTableChange}
          />
        </div>
      </Card>
      <UserDialogForm
        title="新增用户"
        loading={addUserObj.loading}
        isModalOpen={isModalOpen}
        roleList={roleList}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
});

export default User;
