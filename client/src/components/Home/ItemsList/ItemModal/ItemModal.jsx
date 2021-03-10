import React, { useState } from 'react';
import {
  Modal, Card, Divider, Col, Row, Typography, Button, Popconfirm,
} from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import itemFinder from '../../../../api/itemFinder';
import useDidMountEffect from '../../../../hooks/useDidMountEffect';
import CreateData from './CreateData/CreateData';

const { Title, Paragraph } = Typography;

const ItemModal = ({ item, visible, onCancel }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [itemData, setItemData] = useState(item.data);
  const [isCreating, setIsCreating] = useState(false);

  useDidMountEffect(() => {
    const updateItem = async () => {
      await itemFinder.put(`/${item._id}`, {
        title,
        description,
        data: [...itemData],
      });
    };
    updateItem();
  }, [title, description, itemData]);

  const handleDataKeyChange = (newKeyValue, id) => {
    const itemIndex = itemData.findIndex((target) => target._id === id);
    itemData[itemIndex].key = newKeyValue;
    setItemData([...itemData]);
  };

  const handleDataValueChange = (newValue, id) => {
    const itemIndex = itemData.findIndex((target) => target._id === id);
    itemData[itemIndex].value = newValue;
    setItemData([...itemData]);
  };

  const handleDataRemove = (id) => {
    const itemIndex = itemData.findIndex((target) => target._id === id);
    itemData.splice(itemIndex, 1);
    setItemData([...itemData]);
  };

  return (
    <Modal
      visible={visible}
      footer={null}
      onCancel={onCancel}
    >
      <Title
        editable={{ onChange: setTitle }}
        level={1}
      >
        {title}
      </Title>
      <Paragraph
        editable={{
          onChange: setDescription,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {description}
      </Paragraph>
      <div>
        <Title
          level={3}
          style={{ display: 'inline-block' }}
        >
          Data :
        </Title>
        <Button
          icon={<PlusOutlined style={{ color: '#1890ff' }} />}
          shape="circle"
          style={{
            position: 'relative',
            marginLeft: '20px',
            bottom: '2px',
          }}
          onClick={() => setIsCreating(!isCreating)}
        />
      </div>
      {isCreating
        && (
        <CreateData
          item={item}
          handleIsCreating={(value) => setIsCreating(value)}
          handleItemData={(updatedItemData) => setItemData([...itemData, updatedItemData])}
        />
        )}
      <Row gutter={[16, 16]}>
        {itemData.map((data) => (
          <Col span={12} key={data._id}>
            <Popconfirm
              placement="top"
              title="Etes-vous certain de vouloir supprimer cette donnée ?"
              onConfirm={() => handleDataRemove(data._id)}
              okText="Oui"
              cancelText="Non"
            >
              <Button
                danger
                size="small"
                shape="circle"
                icon={<DeleteOutlined style={{ color: 'red' }} />}
                style={{
                  position: 'relative',
                  left: '214px',
                  top: '14px',
                  zIndex: '1',
                }}
              />
            </Popconfirm>
            <Card style={{ width: 'inherit' }}>
              <Title level={5}>Clé:</Title>
              <Paragraph
                editable={{
                  onChange: (newKeyValue) => handleDataKeyChange(newKeyValue, data._id),
                }}
                ellipsis
              >
                {data.key}
              </Paragraph>
              <Divider />
              <Title level={5}>Valeur:</Title>
              <Paragraph
                editable={{
                  onChange: (newValue) => handleDataValueChange(newValue, data._id),
                }}
                ellipsis
              >
                {data.value}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default ItemModal;
