import React, { useState, useEffect } from 'react'
import { Row, Button } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import itemFinder from '../../../api/itemFinder';
import { useHistory } from 'react-router-dom';


const ItemsList = () => {
  const [items, setItems] = useState([]);
  let history = useHistory();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true
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
      dataIndex: ["data", "0", "value"],
      key: 'value',
      ellipsis: true
    },
    {
      title: 'Update',
      key: 'update',
      render: (item) => (
        <Button
          shape="circle"
          icon={<EditOutlined style={{color: "orange"}}/>}
          onClick={(e) => handleUpdate(e, item._id)}
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await itemFinder.get("/");
        console.log(response.data)
        setItems(response.data)
        console.log()
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`items/${id}/update`)
  }

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await itemFinder.delete(`/${id}`);
      setItems(items.filter(item => item._id !== id))
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Row justify="center">
      {items &&
        <Table
          columns={columns}
          dataSource={items}
        />
      }
    </Row>
  )
}

export default ItemsList
