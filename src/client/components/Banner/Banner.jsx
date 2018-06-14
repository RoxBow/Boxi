import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_banner.scss';
import React from 'react';
import { Row, Col, Button, Form, Input } from 'antd';

const FormItem = Form.Item;

class Banner extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-banner">
        <Row>
            <Col offset={6} xs={24} sm={24} md={12} lg={12} xl={12}>
                <h2>Hello Charles</h2>
                <p>Que puis-je faire pour vous aujourd'hui ?</p>
                <Row type="flex" justify="center">
                    <Input placeholder="Je veux une baguette..." />
                    <Button>GO</Button>
                </Row>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
