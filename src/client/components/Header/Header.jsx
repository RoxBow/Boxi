import 'antd/dist/antd.css';
import '../../styles/_header.scss';
import '../../styles/_variables.scss';
import React from 'react';
import { Row, Col, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../constants';

const Header = ({ openCart, listProduct }) => (
  <header>
    <Row type="flex" justify="space-between" className="container">
      <Col xs={24} sm={24} md={6} lg={4} xl={4} className="wrapper-logo">
        <NavLink to="/" activeClassName="selected">
          <img src="../../../images/boxi-logo.svg" alt="logo" />
        </NavLink>
      </Col>

      <Col xs={24} sm={24} md={6} lg={6} xl={6} className="wrapper-links">
        <ul>
          <li className="wrapper-link-about">
            <NavLink to={PATH.HOME} activeClassName="selected">
              A propos
            </NavLink>
          </li>
          <li className="wrapper-link-shoppping">
            <Button onClick={openCart}>
              <img src="../../../images/panier.png" alt="panier image" />
              <span>{listProduct && listProduct.length > 0 && listProduct.length}</span>
            </Button>
          </li>
          <li>
            <NavLink to={PATH.HOME}>
              <img src="../../../images/img-compte.jpg" alt="image utilisateur" />
            </NavLink>
          </li>
        </ul>
      </Col>
    </Row>
  </header>
);

export default Header;
