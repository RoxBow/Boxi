import 'antd/dist/antd.css';
import '../../styles/_products.scss';
import React from 'react';
import { Row, Col } from 'antd';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.checkProductInCart = this.checkProductInCart.bind(this);
  }

  checkProductInCart(productId) {
    const { cart } = this.props;

    if (!cart) return;

    for (let i = 0, len = cart.length; i < len; i++) {
      if (cart[i].productId === productId) {
        return true;
      }
    }

    return false;
  }

  render() {
    const { products, removeProduct, buyProduct } = this.props;
    const _this = this;

    return (
      <div className="wrapper-products">
        {products.map((product, i) => (
          <Product
            key={i}
            {...product}
            buyProduct={buyProduct}
            removeProduct={removeProduct}
            isInCart={_this.checkProductInCart(product.productId)}
          />
        ))}
      </div>
    );
  }
}

export default Products;
