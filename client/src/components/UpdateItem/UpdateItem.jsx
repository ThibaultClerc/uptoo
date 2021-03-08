import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import itemFinder from '../../api/itemFinder';
import { Form, Input, Button } from 'antd';

const UpdateItem = () => {
  let history = useHistory();
  const {id} = useParams();
  const [data, setData] = useState([])

  useEffect(() => { 
    const fetchData = async () => {
      const response = await itemFinder.get(`/${id}`)
      setData(response.data)
    }
    fetchData()
  }, [])

  const onFinish = async (values) => {
    await itemFinder.put(`/${id}`, {
      title: values.title,
      description: values.description,
      data: {
        key: values.key,
        value: values.value
      }
    })
    history.push("/")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {data.length !== 0 && 
        <Form
        name="basic"
        initialValues={
          {
            title: data.title,
            description: data.description,
            key: data.data[0].key,
            value: data.data[0].value
          }
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Rentrez le titre de votre item' }]}
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
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      }
    </>
  )
}

export default UpdateItem
