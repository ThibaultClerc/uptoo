import React, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Header from './Header/Header';
import ItemsList from './ItemsList/ItemsList';
import AddItem from './AddItem/AddItem';
import itemFinder from '../../api/itemFinder';

const { Footer } = Layout;

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [itemUpdated, setItemUpdated] = useState(false);

  const fetchData = async () => {
    try {
      const response = await itemFinder.get('/');
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onCreate = async (values) => {
    console.log(values);
    await itemFinder.post('/', {
      title: values.title,
      description: values.description,
      data: values.data,
    });
    setVisible(false);
    fetchData();
  };

  useEffect(() => {
    if (itemUpdated) {
      fetchData();
      setItemUpdated(false);
    }
  }, [itemUpdated]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {items
      && (
      <Layout style={{
        padding: '5vw 10vw 0',
        height: '100vh',
        minHeight: 'calc(100vh - 70px)',
      }}
      >
        <Header />
        <Button
          shape="round"
          type="primary"
          size="large"
          onClick={() => setVisible(true)}
          icon={<PlusOutlined />}
          style={{
            width: 'fit-content',
            margin: '10px auto 50px',
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
          padding: '3vw',
          color: 'lightslategray',
          height: '50px',
        }}
        >
          Test Technique Uptoo
        </Footer>
      </Layout>
      )}
    </>
  );
};

export default Home;
