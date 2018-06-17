import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_header.scss';
import '../../styles/_variables.scss';
import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import ShoppingBasket from 'react-icons/lib/fa/shopping-basket';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
        <header>
            <Row type="flex" justify="space-between">
                <Col xs={24} sm={24} md={6} lg={4} xl={4} className="wrapper-logo">
                    <img src="../../../images/boxi-logo.svg" alt="logo" />
                </Col>

                <Col xs={24} sm={24} md={6} lg={6} xl={6} className="wrapper-links">
                    <ul>
                        <li className="wrapper-link-about"><NavLink to="/about" activeClassName="selected">A propos</NavLink></li>
                        <li className="wrapper-link-shoppping"><NavLink to="/moncompte"><ShoppingBasket /></NavLink></li>
                        <li><NavLink to="/inscription"><img src="../../../images/img-compte.jpg" alt="image logo" /></NavLink></li>
                    </ul>
                </Col>
            </Row>
        </header>
    );
  }
}

export default Header;
