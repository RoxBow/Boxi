import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_header.scss';
import React from 'react';
import { Row, Col, Button, Icon } from 'antd';

import QuickAction from '../QuickAction/QuickAction';

class QuickActions extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div>
        <h2>On vous suggère :</h2>
        <Row type="flex" justify="space-between">
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <QuickAction icon="shopping-cart" text="Commander une corbeille de fruits"/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <QuickAction icon="github" text="Recevoir des journaux"/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <QuickAction icon="dropbox" text="Déposer un colis"/>
            </Col>
        </Row>
      </div>
    );
  }
}

export default QuickActions;
