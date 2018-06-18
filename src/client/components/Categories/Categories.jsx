import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_type_newspapers.scss';
import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import Category from './Category';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Quel type de journaux souhaitez-vous recevoir ?</h2>
        <Row gutter={32} type="flex" justify="space-between">
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Category name="Sports" icon="smile-o" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Category name="Sports" icon="smile-o" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Category name="Sports" icon="smile-o" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Category name="Sports" icon="smile-o" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Category name="Sports" icon="smile-o" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Category name="Sports" icon="smile-o" />
            </Col>
        </Row>

        <Row type="flex" justify="space-between" className="wrapper-buttons-action">
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Button>RETOUR</Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={7}>
                <Button>VALIDER</Button>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Categories;
