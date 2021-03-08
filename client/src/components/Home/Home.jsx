import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import ItemsList from './ItemsList/ItemsList';
import AddItem from './AddItem/AddItem';
import { Layout, Button } from 'antd';
import itemFinder from '../../api/itemFinder';
const { Footer } = Layout;

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);
  let history = useHistory();

  const fetchData = async () => {
    try {
      const response = await itemFinder.get("/");
      setItems(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const onCreate = async (values) => {
    await itemFinder.post('/', {
      title: values.title,
      description: values.description,
      data: {
        key: values.key,
        value: values.value
      }
    });
    setVisible(false);
    history.push("/");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    {items && 
      <Layout style={{ padding: '100px' }}>
        <Header/>
        <Button
          type="primary"
          onClick={() => setVisible(true)}>
          Ajouter un Item
        </Button>
        <AddItem 
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
        <SearchBar/>
        <ItemsList
          items={items}
          deleteHandler={(newItemsArray) => setItems(newItemsArray)}
        />
        <Footer style={{ textAlign: 'center' }}>Test Technique Uptoo</Footer>
      </Layout>
    }
    </>
  )
}

export default Home
