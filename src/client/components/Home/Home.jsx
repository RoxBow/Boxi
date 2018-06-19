import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import Banner from '../Banner/BannerContainer';
import QuickActions from '../QuickActions/QuickActionsContainer';
import TimeLine from '../TimeLine/TimeLine';
import Budget from '../Budget/Budget';
import TemplatePage from '../TemplatePage/TemplatePage';

const Home = () => (
  <TemplatePage>
    <Banner />
    <QuickActions />
    <Row className="container" style={{ margin: 'auto' }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Budget />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <TimeLine />
      </Col>
    </Row>
  </TemplatePage>
);

export default Home;
