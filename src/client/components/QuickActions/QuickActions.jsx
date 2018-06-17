import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_header.scss';
import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import Title from '../Title/Title';

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
        <Title title="On vous suggère :"/>
        <Row type="flex" justify="space-between">
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                <QuickAction icon="grapes" text="Commander une corbeille de fruits"/>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                <QuickAction icon="newspapers" text="Recevoir des journaux"/>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                <QuickAction icon="box" text="Déposer un colis"/>
            </Col>
        </Row>
      </div>
    );
  }
}

export default QuickActions;
