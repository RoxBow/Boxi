import React from 'react';
import { Button } from 'antd';
import { STEP2BUY } from '../../../constants';

const Step1 = ({ selectedProduct, showPopin }) => {
  const { title, price, description } = selectedProduct;

  return (
    <div>
      <p>
        {title} - {price.toFixed(2)}€
      </p>
      <p>{description}</p>
      <p>Souhaitez-vous recevoir ce journal une seule fois ou régulièrement ?</p>
      <div>
        <Button onClick={() => showPopin(STEP2BUY)} className="btn-action btn-secondary">
          Juste une fois
        </Button>
        <Button onClick={() => showPopin(STEP2BUY)} className="btn-action btn-primary">
          S'abonner
        </Button>
      </div>
    </div>
  );
};

export default Step1;
