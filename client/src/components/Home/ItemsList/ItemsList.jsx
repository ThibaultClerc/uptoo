import React, { useState } from 'react'
import { Row, Button, Table, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import itemFinder from '../../../api/itemFinder';
import ItemModal from './ItemModal/ItemModal';
import './index.css'

const ItemsList = ({items, deleteHandler, itemUpdated}) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    {
      title: 'Titre',
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
      title: "Action",
      key: 'delete',
      render: (item) => (
        <>
        <Popconfirm
          placement="top"
          title="Etes-vous certain de vouloir supprimer cet item ?"
          onConfirm={(e) => handleDelete(e, item._id)}
          onCancel={(e) => e.stopPropagation()}
          okText="Oui"
          cancelText="Non"
        >
          <Button
            danger
            shape="circle"
            style={{margin: "auto", display: "block"}}
            icon={<DeleteOutlined style={{color: "red"}}/>}
            onClick={e => e.stopPropagation()}
          />
        </Popconfirm>
        </>
      ),
    },
  ];

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

  const handleRowClick = (row) => {
    setVisible(true)
    setSelectedItem(row)
  }
  
  return (
    <Row justify="center">
      {items &&
        <Table
          columns={columns}
          dataSource={items}
          pagination={false}
          onRow={(r) => ({
            onClick: () => { handleRowClick(r) }
          })}
          style={{width: "50vw"}}
          rowKey={record => record._id}
          className="myTable"
        />
      }
      {visible &&
        <ItemModal 
          visible={true}
          onCancel={(e) => {
            e.stopPropagation();
            setVisible(false);
            itemUpdated(true);
          }}
          item={selectedItem}
        />
      }
    </Row>
  )
}

export default ItemsList;
