import React from 'react';
import { Button } from 'antd';

const CardProduct = (props) => (
  <div className="wrapper-cart-product">
    <div className="wrapper-number-product">
      <p>{props.ite}</p>
    </div>
    <div className="wrapper-product">
      <div className="wrapper-product-top">
        <p>{props.title}</p>
        <p>{props.price.toFixed(2)}€</p>
      </div>

      <div className="wrapper-product-bottom">
        <img  src={`../../../images/${props.productId}.jpg`} alt={`image magazine ${props.productId}`} />
      </div>
      <Button onClick={() => props.removeProduct(props)} className="button-remove"></Button>
    </div>
  </div>
);

export default CardProduct;
