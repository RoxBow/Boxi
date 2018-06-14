import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_type_newspaper.scss';
import React from 'react';
import { Row, Col, Button, Icon } from 'antd';

class TypeNewspaper extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={12} lg={24} xl={24} className="wrapper-type-newspaper">
                <Icon type={this.props.icon} />
                <p>{this.props.name}</p>
            </Col>
        </Row>
      </div>
    );
  }
}

export default TypeNewspaper;
