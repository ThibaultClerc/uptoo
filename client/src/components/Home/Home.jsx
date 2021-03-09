import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import ItemsList from './ItemsList/ItemsList';
import AddItem from './AddItem/AddItem';
import { Layout, Button } from 'antd';
import itemFinder from '../../api/itemFinder';
import { PlusOutlined } from '@ant-design/icons';
const { Footer } = Layout;

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [itemUpdated, setItemUpdated] = useState(false)

  const fetchData = async () => {
    try {
      const response = await itemFinder.get("/");
      setItems(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const onCreate = async (values) => {
    console.log(values)
    await itemFinder.post('/', {
      title: values.title,
      description: values.description,
      data: values.data
    });
    setVisible(false);
    fetchData();
  };

  useEffect(() => {
    if (itemUpdated) {
      fetchData();
      setItemUpdated(false)
    }
  }, [itemUpdated])

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    {items && 
      <Layout style={{
        padding: '8vw 10vw',
        height: "100vh"
      }}>
        <Header/>
        <Button
          shape="round"
          type="primary"
          size="large"
          onClick={() => setVisible(true)}
          icon={<PlusOutlined />}
          style={{
            width: "fit-content",
            margin: "40px auto"
          }}
          >
          Ajouter un Item
        </Button>
        <AddItem 
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
        <ItemsList
          items={items}
          deleteHandler={(newItemsArray) => setItems(newItemsArray)}
          itemUpdated={(value) => setItemUpdated(value)}
        />
        <Footer style={{
          textAlign: 'center',
          position: "sticky",
          bottom: "0"
        }}
        >
          Test Technique Uptoo
        </Footer>
      </Layout>
    }
    </>
  )
}

export default Home;