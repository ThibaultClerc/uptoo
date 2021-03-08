import React from 'react'
import { Row, Button } from 'antd';
import { Table, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    render: text => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true
  },
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    ellipsis: true
  },
  {
    title: 'Value',
    key: 'value',
    dataIndex: 'value',
    ellipsis: true
  },
  {
    title: 'Update',
    key: 'update',
    render: () => (
      <Button
        shape="circle"
        icon={<EditOutlined style={{color: "orange"}}/>}
      />
    ),
  },
  {
    title: 'Delete',
    key: 'delete',
    render: () => (
      <Button
        danger
        shape="circle"
        icon={<DeleteOutlined style={{color: "red"}}/>}
      />
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ItemsList = () => {
  return (
    <Row justify="center">
      <Table columns={columns} dataSource={data} />
    </Row>
  )
}

export default ItemsList
