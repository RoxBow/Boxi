import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_quick_action.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';

class QuickAction extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-quick-action">
        <Row type="flex" justify="center" align="middle">
            <img src={"../../images/icon-" + this.props.icon + ".png" } alt={this.props.icon} />
            <Col xs={24} sm={24} md={12} lg={18} xl={18}>
              <p>{this.props.text}</p>
            </Col>
        </Row>
      </div>
    );
  }
}

export default QuickAction;
