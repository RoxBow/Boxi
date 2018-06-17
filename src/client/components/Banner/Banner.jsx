import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_banner.scss';
import React from 'react';
import { Row, Col, Button, Form, Input, Select } from 'antd';

const Option = Select.Option;

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
            <Col className="wrapper-banner-content" xs={24} sm={24} md={11} lg={11} xl={11}>
                <h2>Hello Charles,</h2>
                <p className="sous-titre">Que puis-je faire pour vous aujourd'hui ?</p>
                <Row type="flex">
                    <p className="text-select-before">Je veux</p>
                    <Select className="text-select-after" defaultValue="un bouquet de fleurs">
                      <Option value="commander une corbeille de fruits">commander une corbeille de fruits</Option>
                      <Option value="recevoir des journaux">recevoir des journaux</Option>
                      <Option value="déposer un colis">déposer un colis</Option>
                    </Select>
                    <Button>GO</Button>
                </Row>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
