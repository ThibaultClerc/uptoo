import React, { useState, useEffect } from 'react'
import { Row, Button } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import itemFinder from '../../../api/itemFinder';
import { useHistory } from 'react-router-dom';


const ItemsList = ({items, deleteHandler}) => {
  let history = useHistory();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: '_id',
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
      render: (item) => (
        <Button
          danger
          shape="circle"
          icon={<DeleteOutlined style={{color: "red"}}/>}
          onClick={(e) => handleDelete(e, item._id)}
        />
      ),
    },
  ];

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`items/${id}/update`)
  }

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await itemFinder.delete(`/${id}`);
      const newItemsArray = items.filter(item => item._id !== id)
      deleteHandler(newItemsArray)
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
          rowKey={items._id}
        />
      }
    </Row>
  )
}

export default ItemsList
