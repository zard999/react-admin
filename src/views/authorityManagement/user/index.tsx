/*
 * @Author: zyh
 * @Date: 2023-02-15 14:27:49
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-20 10:33:10
 * @FilePath: /vite-project/src/views/authorityManagement/user/index.tsx
 * @Description: User
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useState, useEffect } from 'react';
import { Card, Input, Button, Table, Popconfirm } from 'antd';
import UserDialogForm from './userDialogForm';
import { observer } from 'mobx-react';
import { useRequest } from 'ahooks';
import { getUserList, addUser, getRoleInfoByUserId, editUserInfo } from '@/api/modules/user';
import { getRoleList } from '@/api/modules/role';
import moment from 'moment';
import type { IAddUserFormData } from './interface';
import './index.less';

const { Search } = Input;

type IData = Record<string, any>;

const User = observer(() => {
  const [tableData, setTableData] = useState<IData>({
    list: [],
    current: 1,
    pageSize: 10,
    total: 0
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [title, setTitle] = useState('');
  const [dataRef, setDataRef] = useState<IData>({
    username: '',
    password: '',
    roleName: []
  }); // 为了更改表单初始值

  const columns = [
    {
      title: '用户名称',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '绑定角色',
      dataIndex: 'signature',
      key: 'signature'
    },
    {
      title: '创建时间',
      dataIndex: 'ctime',
      key: 'ctime'
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (_: any, record: IAddUserFormData) =>
        tableData.list.length >= 1 ? (
          <div>
            <Button
              type="primary"
              style={{ marginRight: '10px' }}
              onClick={() => {
                roleObj.run();
                setTitle('编辑用户');
                setDataRef({
                  id: record.id,
                  username: record.username,
                  password: record.password
                });
                getRoleInfoByUserIdObj.run({ id: record.id });
                setIsModalOpen(true);
              }}
            >
              编辑
            </Button>
            <Popconfirm
              title={`确定删除 ${record.username} 吗?`}
              cancelText="取消"
              okText="确定"
              onConfirm={() => handleDelete(record.id)}
            >
              <Button danger type="primary">
                删除
              </Button>
            </Popconfirm>
          </div>
        ) : null
    }
  ];

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

  // 根据用户id查询当前用户绑定的角色
  const getRoleInfoByUserIdObj = useRequest(getRoleInfoByUserId, {
    manual: true,
    onSuccess: (result, params) => {
      setDataRef(data => ({
        ...data,
        roleName: result
      }));
      console.log('getRoleInfoByUserId', result, params);
    }
  });

  // 编辑用户信息
  const editRoleInfoObj = useRequest(editUserInfo, {
    manual: true,
    onSuccess: (result, params) => {
      console.log('editUserInfo', result, params);
    }
  });

  // 删除用户
  const handleDelete = (key: React.Key) => {
    const newData = tableData.list.filter((item: any) => item.key !== key);
    setTableData({
      ...tableData.list,
      list: newData
    });
  };

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
    setTitle('新增用户');
    setDataRef({
      username: '',
      password: '',
      roleName: []
    });
    setIsModalOpen(true);
  };

  // 确定保存用户信息时的回调
  const handleOk = async (addUserForm: IAddUserFormData, title: string) => {
    try {
      if (title === '新增用户') {
        await addUserObj.runAsync(addUserForm);
      } else {
        await editRoleInfoObj.runAsync(addUserForm);
      }
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
        title={title}
        loading={addUserObj.loading}
        isModalOpen={isModalOpen}
        roleList={roleList}
        dataRef={dataRef}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
});

export default User;
