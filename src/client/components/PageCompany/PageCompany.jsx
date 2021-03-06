import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import { Row, Col, Button } from 'antd';
import PageSubscribe from './PageSubscribe';
import PageAdd from './PageAdd';
import PageConfirmation from './PageConfirmation';
import { LOGIN } from '../../constants';

const PageCompany = ({ stepEmployee, companyValid, showPopin }) => (
  <Row className="wrapper-page-company">
    <Col xs={24} sm={24} md={24} lg={10} xl={10} className="wrapper-part-left">
      <img src="../../images/boxi-logo-white.svg" alt="logo Boxi" />
      <div className="wrapper-header">
        <h2>BOXI</h2>
        <img src="../../images/illu-boxi-fleurs.svg" alt="logo Boxi" />
        <p>La conciergerie en boîte</p>
      </div>
    </Col>
    <Col xs={24} sm={24} md={24} lg={14} xl={14} className="wrapper-part-right">
      <div className="wrapper-top-company">
        <p>Vous avez déjà un compte ?</p>
        <Button onClick={() => showPopin(LOGIN)}>Connectez-vous</Button>
      </div>
      {!stepEmployee && !companyValid && <PageSubscribe />}
      {stepEmployee && !companyValid && <PageAdd />}
      {stepEmployee && companyValid && <PageConfirmation />}
    </Col>
  </Row>
);

export default PageCompany;
