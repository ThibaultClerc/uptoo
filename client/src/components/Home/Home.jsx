import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import ItemsList from './ItemsList/ItemsList';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const Home = () => {
  return (
    <Layout style={{ padding: '100px' }}>
        <Header/>
        <SearchBar/>
        <ItemsList/>
      <Footer style={{ textAlign: 'center' }}>Test Technique Uptoo</Footer>
    </Layout>
  )
}

export default Home
