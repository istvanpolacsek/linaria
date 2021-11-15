import React, { useState } from 'react';
import { AppImageStyled, AppInnerStyled, RowWithMarginStyled } from 'components/AppInner/styled';
import logo from 'assets/svg/logo.svg';
import { Button, Col, Input, Row, Skeleton, Switch } from 'antd';
import SearchBox from 'components/SearchBox/SearchBox';

const AppInner = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppInnerStyled color={isLoading ? '#994d00' : '#282c34'}>
      <RowWithMarginStyled justify="center">
        <Switch checked={isLoading} onChange={setIsLoading} />
      </RowWithMarginStyled>
      <Row justify="center">
        {isLoading
          ? <Skeleton.Image />
          : <AppImageStyled src={logo} alt="logo" />}
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Input placeholder="example@email.com" />
        </Col>
        <Col span={2}>
          <Button block type="primary">GO!</Button>
        </Col>
      </Row>
      <SearchBox />
    </AppInnerStyled>
  );
};

export default AppInner;
