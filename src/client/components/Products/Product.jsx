import 'antd/dist/antd.css';
import '../../styles/_product.scss';
import React from 'react';
import { Button } from 'antd';
import { STEP1BUY } from '../../constants';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, price, isInCart, buyProduct, removeProduct, productId } = this.props;
    
    return (
      <div  className={ isInCart ? "wrapper-product active" : "wrapper-product" } >
          <div className="wrapper-product-top">
              <p>{title}</p>
              <p>{price.toFixed(2)}€</p>
          </div>
          <div className="wrapper-product-bottom">
              <img src={"../../../images/" + productId + ".jpg"} alt={"image du magazine " + title } />
          </div>
          <div>
            {isInCart ? (
            <Button className="btn-remove" onClick={() => removeProduct(this.props)}>
                <span className="icon-btn"></span>
              </Button>
            ) : (
              <Button className="btn-add" onClick={() => buyProduct(STEP1BUY, this.props)}>
                  <span className="icon-btn"></span>
              </Button>
            )}
          </div>
      </div>
    );
  }
}

export default Product;
