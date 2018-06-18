import 'antd/dist/antd.css';
import '../../styles/_footer.scss';
import React from 'react';
import { Row, Col } from 'antd';

const Footer = () => (
    <footer>
        <Row type="flex" justify="space-between" className="container">
            <Col xs={24} sm={24} md={12} lg={2} xl={2}>
                <img className="img-logo-footer" src="../../../images/boxi-logo-white.svg" alt="logo"/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={18} xl={18} className="vertical-center">
                <p>BOXI - Tous droits réservés - 2018</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={4} xl={4} className="vertical-center">
                <a href="#"><img src="../../../images/email.png" alt="email"/></a>
                <a href="#"><img src="../../../images/twitter.png" alt="twitter"/></a>
                <a href="#"><img src="../../../images/facebook.png" alt="facebook"/></a>
            </Col>
        </Row>
    </footer>
);


export default Footer;
