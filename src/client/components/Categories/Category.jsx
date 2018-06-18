import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_category.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Category = ({name, path, typeService, icon}) => (
    <Link to={`/service/${typeService}/${path}`}>
        <div className="wrapper-category">
            <div className="wrapper-category-top">
                <p>{name}</p>
            </div>
            <div className="wrapper-category-bottom">
                <img src="../../../images/image-category.png" alt="image logo"/>
            </div>
        </div>
    </Link>
);

export default Category;
