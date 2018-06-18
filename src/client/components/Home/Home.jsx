import React from 'react';
import { Row, Col } from 'antd';
import Header from '../Header/HeaderContainer';
import Banner from '../Banner/BannerContainer';
import QuickActions from '../QuickActions/QuickActionsContainer';
import TimeLine from '../TimeLine/TimeLine';
import Budget from '../Budget/Budget';
import Cart from '../Cart/CartContainer';
import Footer from '../Footer/Footer';

const Home = ({ isCartOpen }) => (
  <div>
    <Header />
    <Banner />
    { isCartOpen && <Cart />}
    <QuickActions />
    <Row className="container" style={{margin:"auto"}}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Budget />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <TimeLine />
      </Col>
    </Row>
    <Footer />
  </div>
);

export default Home;
