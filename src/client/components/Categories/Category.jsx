import 'antd/dist/antd.css';
import '../../styles/_category.scss';
import '../../styles/_sprite.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Category = ({ name, path, typeService, icon }) => (
  <Link to={`/service/${typeService}/${path}`}>
    <div className="wrapper-category">
      <span className={`icone-${path}`}></span>
      <p>{name}</p>
    </div>
  </Link>
);

export default Category;
