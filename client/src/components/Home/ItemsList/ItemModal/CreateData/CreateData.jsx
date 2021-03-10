import React from 'react';
import { Form, Input, Button } from 'antd';
import itemFinder from '../../../../../api/itemFinder';

const CreateData = ({ item, handleIsCreating, handleItemData }) => {
  const onFinish = async (values) => {
    const updatedItem = {
      title: item.title,
      description: item.description,
      data: {
        key: values.key,
        value: values.value,
      },
    };
    await itemFinder.put(`/${item._id}`, updatedItem);
    console.log(updatedItem.data);
    handleIsCreating(false);
    handleItemData(updatedItem.data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Clé"
        name="key"
        rules={[{ required: true, message: 'Rentrez la clé de votre donnée' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Valeur"
        name="value"
        rules={[{ required: true, message: 'Rentrez la valeur de votre donnée' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Créer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateData;
