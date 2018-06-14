import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_header.scss';
import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <header>
        <Row>
            <Col offset={2} xs={24} sm={24} md={12} lg={4} xl={4}>
                <img src="#" alt="logo" />
            </Col>
            <Col offset={10} xs={24} sm={24} md={12} lg={2} xl={2}>
                <NavLink to="/about" activeClassName="selected">A propos</NavLink>
            </Col>
            <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                <NavLink to="/inscription">S'inscrire</NavLink>
            </Col>
            <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                <NavLink to="/moncompte">Mon compte</NavLink>
            </Col>
            <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                <NavLink to="/moncompte"><Icon type="shopping-cart" /><span className="badge-cart"></span></NavLink>
            </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
