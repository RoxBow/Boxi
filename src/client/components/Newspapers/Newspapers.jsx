import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_newspapers.scss';
import React from 'react';
import { Row, Col, Button } from 'antd';
import Newspaper from '../Newspaper/Newspaper';

class Newspapers extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div>
        <Row gutter={32}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Newspaper price="1.99 €" name="Public" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />
                <Newspaper price="1.99 €" name="Oops" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Newspaper price="1.99 €" name="Closer" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />
                <Newspaper price="1.99 €" name="Auto Moto" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />
            </Col>
        </Row>

        <Row>
            <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                <Button>RETOUR</Button>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Newspapers;
