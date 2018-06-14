import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_quick_action.scss';
import React from 'react';
import { Row, Col, Button, Form, Input, Icon } from 'antd';

class QuickAction extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-quick-action">
        <Row gutter={8}>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Icon type={this.props.icon} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={18} xl={18}>
              <p>{this.props.text}</p>
            </Col>
        </Row>
      </div>
    );
  }
}

export default QuickAction;
