import React, { useState, useEffect } from 'react'
import { Row, Button } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import itemFinder from '../../../api/itemFinder';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
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
    dataIndex: ["data", "0", "key"],
    key: 'key',
    ellipsis: true
  },
  {
    title: 'Value',
    key: 'data[0].key',
    dataIndex: ["data", "0", "value"],
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

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await itemFinder.get("/");
        console.log(response.data)
        setItems(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])

  return (
    <Row justify="center">
      {items && <Table columns={columns} dataSource={items} />}
    </Row>
  )
}

export default ItemsList
