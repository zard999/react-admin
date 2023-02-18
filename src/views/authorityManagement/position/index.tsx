/*
 * @Author: zyh
 * @Date: 2023-02-15 14:27:49
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-18 18:18:00
 * @FilePath: /vite-project/src/views/authorityManagement/position/index.tsx
 * @Description: 角色管理
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
import { useState, useEffect } from 'react';
import { Card, Input, Button, Table, Popconfirm } from 'antd';
import RoleDialogForm from './roleDialogForm';
import { observer } from 'mobx-react';
import { useRequest } from 'ahooks';
import { getRoleList, addRole } from '@/api/modules/role';
import moment from 'moment';
import type { IAddRoleFormData } from './interface';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const { Search } = Input;

const Position = observer(() => {
  const [tableData, setTableData] = useState<Record<string, any>>({
    list: [],
    current: 1,
    pageSize: 10,
    total: 0
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [dataRef, setDataRef] = useState({
    roleName: '',
    description: '',
    permissions: []
  }); // 为了更改表单初始值
  const columns = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName'
    },
    {
      title: '权限描述',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at'
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (_: any, record: IAddRoleFormData) =>
        tableData.list.length >= 1 ? (
          <div>
            <Button
              type="primary"
              style={{ marginRight: '10px' }}
              onClick={() => {
                setTitle('编辑角色');
                setDataRef({
                  roleName: record.roleName,
                  description: record.description,
                  permissions: JSON.parse(record.permissions)
                });
                setIsModalOpen(true);
              }}
            >
              编辑
            </Button>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
              <Button danger type="primary">
                删除
              </Button>
            </Popconfirm>
          </div>
        ) : null
    }
  ];

  useEffect(() => {
    run({
      current: 1,
      pageSize: 10
    });
  }, []);

  // 获取用户列表
  const { run, loading } = useRequest(getRoleList, {
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
        list: result.list.map((item: any) => ({ ...item, created_at: moment(+item.created_at).format('YYYY-MM-DD HH:mm:ss') }))
      });
      console.log('params', result, params);
    }
  });

  // 新增用户
  const addRoleObj = useRequest(addRole, {
    manual: true, // 手动触发
    onSuccess: (result, params) => {
      console.log('params', result, params);
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

  const onSearch = (value: string) => console.log(value);
  const handleTableChange = () => {};
  const showModal = () => {
    setTitle('新增角色');
    setDataRef({
      roleName: '',
      description: '',
      permissions: []
    });

    setIsModalOpen(true);
  };

  const handleOk = async (addRoleForm: IAddRoleFormData, form: FormInstance) => {
    try {
      const res = await addRoleObj.runAsync(addRoleForm);
      console.log('res', res);
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
          <Search placeholder="请输入角色名称关键词" loading={false} onSearch={onSearch} style={{ width: 200 }} />
          <div></div>
          <Button type="primary" loading={false} onClick={showModal}>
            新增角色
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
      <RoleDialogForm
        title={title}
        loading={addRoleObj.loading}
        dataRef={dataRef}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
});

export default Position;
