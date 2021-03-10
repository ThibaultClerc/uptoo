import React from 'react';
import { Row, Typography } from 'antd';

const { Title } = Typography;

const Header = () => (
  <Row justify="center">
    <Title
      style={{
        fontSize: '6em',
        color: 'lightslategray',
      }}
    >
      Items Collection
    </Title>
  </Row>
);

export default Header;
