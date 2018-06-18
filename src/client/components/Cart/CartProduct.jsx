import React from 'react';
import { Button } from 'antd';

const CardProduct = (props) => (
  <div>
    <p>{props.title}</p>
    <p>{props.price.toFixed(2)}€</p>
    <Button onClick={() => props.removeProduct(props)}>Supprimer</Button>
  </div>
);

export default CardProduct;
