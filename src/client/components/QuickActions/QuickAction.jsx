import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_quick_action.scss';
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const QuickAction = ({ icon, name, path }) => (
  <div className="wrapper-quick-action">
    <Link to={`/service/${path}`}>
      <Row type="flex" justify="center" align="middle">
        <img src={'../../images/icon-' + icon + '.png'} alt={icon} />
        <Col xs={24} sm={24} md={12} lg={18} xl={18}>
          <p>{name}</p>
        </Col>
      </Row>
    </Link>
  </div>
);

export default QuickAction;
