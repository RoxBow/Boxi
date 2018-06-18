import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_category.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Category = ({ name, path, typeService, icon }) => (
  <Link to={`/service/${typeService}/${path}`}>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={12} lg={24} xl={24} className="wrapper-type-category">
        <Icon type={icon} />
        <p>{name}</p>
      </Col>
    </Row>
  </Link>
);

export default Category;
