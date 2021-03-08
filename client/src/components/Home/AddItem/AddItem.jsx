import React from 'react';
import { Form, Input, Modal } from 'antd';

const AddItem = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add a new item"
      visible={visible}
      okText="Créer"
      cancelText="Annuler"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('La validation a échouée:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="basic"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Rentrez le titre du nouvel item' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Rentrez la description de votre item' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Key"
          name="key"
          rules={[{ required: true, message: 'Rentrez la key de votre item' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Value"
          name="value"
          rules={[{ required: true, message: 'Rentrez la value de votre item' }]}
        >
          <Input/>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddItem
