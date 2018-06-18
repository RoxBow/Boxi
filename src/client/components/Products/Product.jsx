import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_product.scss';
import React from 'react';
import { Button } from 'antd';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, price, isInCart, addProduct, removeProduct } = this.props;

    return (
      <div className="wrapper-product">
          <div className="wrapper-product-top">
              <p>{title}</p>
              <p>{price.toFixed(2)}€</p>
          </div>
          <div className="wrapper-product-bottom">
              <img src="../../../images/image-product.png" alt="image logo" />
          </div>
          <div className="wrapper-product-bottom">
            {isInCart ? (
            <Button className="btn-remove" onClick={() => removeProduct(this.props)}>
                <span className="icon-btn"></span>
              </Button>
            ) : (
              <Button className="btn-add" onClick={() => addProduct(this.props)}>
                  <span className="icon-btn"></span>
              </Button>
            )}
          </div>
      </div>
    );
  }
}

export default Product;
