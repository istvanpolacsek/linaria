import React from 'react';
import { SearchBoxStyled } from 'components/SearchBox/styled';
import { Button, Col, Input } from 'antd';

const SearchBox = () => {
  return (
    <SearchBoxStyled justify="center">
      <Col span={6}>
        <Input placeholder="Search the web" />
      </Col>
      <Col span={2}>
        <Button block>I'm lucky!</Button>
      </Col>
    </SearchBoxStyled>
  );
};

export default SearchBox;
