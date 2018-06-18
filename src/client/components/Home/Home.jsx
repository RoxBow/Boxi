import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import QuickActions from '../QuickActions/QuickActions';
import TimeLine from '../TimeLine/TimeLine';
import Budget from '../Budget/Budget';

import { Row, Col } from 'antd';

const Home = () => (
  <div>
    <Header />
    <Banner />
    <QuickActions />
    <Row className="container" style={{margin:"auto"}}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Budget />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <TimeLine />
      </Col>
    </Row>
  </div>
);

export default Home;
