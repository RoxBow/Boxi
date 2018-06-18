import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_product.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-product">
        <div className="wrapper-product-body">
            <h3>{this.props.name} - {this.props.price}</h3>
            <div className="wrapper-product-description">
                <p>{this.props.description}</p>
            </div>
        </div>
        <div className="wrapper-product-footer">
            <div className="wrapper-product-add-remove">
                <a href="#"><span className="icon-add-remove"></span>Ajouter</a>
            </div>
            <div className="wrapper-product-see-more">
                <a href="#">Voir plus<span className="icon-see-more"></span></a>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;
