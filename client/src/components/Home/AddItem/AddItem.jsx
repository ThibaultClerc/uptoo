import React from 'react';
import { Form, Input, Modal, Button, Space, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;

const AddItem = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Ajouter un nouvel item"
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
          label="Titre"
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
        <Title level={3}></Title>
        <Form.List name="data">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...field}
                    name={[field.name, 'key']}
                    fieldKey={[field.fieldKey, 'key']}
                    rules={[{ required: true, message: 'Rentrez la clé de votre donnée' }]}
                  >
                    <Input placeholder="Clé" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'value']}
                    fieldKey={[field.fieldKey, 'value']}
                    rules={[{ required: true, message: 'Rentrez la valeur de votre donnée' }]}
                  >
                    <Input placeholder="Valeur" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Ajouter des données
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  )
}

export default AddItem;