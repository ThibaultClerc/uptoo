import React from 'react';
import {Row} from 'antd';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchBar = () => {

  const onSearch = value => console.log(value);

  return (
    <Row justify="center">
      <Search placeholder="Rechercher un item" onSearch={onSearch} enterButton />
    </Row>
  )
}

export default SearchBar
