import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_footer.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <footer>
        <Row type="flex" justify="space-between">
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                <img src="#" alt="logo" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={16}>
                <p>BOXI - Tous droits réservés - 2018</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xl={4}>
                <a href="#"><Icon type="profile" /></a>
                <a href="#"><Icon type="facebook" /></a>
                <a href="#"><Icon type="twitter" /></a>
            </Col>
        </Row>
      </footer>
    );
  }
}


export default Footer;
