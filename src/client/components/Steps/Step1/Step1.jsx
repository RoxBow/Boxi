import React from 'react';
import { Button } from 'antd';
import { STEP2BUY } from '../../../constants';
import '../../../styles/_step1.scss';

const Step1 = ({ selectedProduct, showPopin }) => {
  const { title, price, description } = selectedProduct;

  return (
    <div className="wrapper-popin">
      <p className="title-popin">
        {title} - {price.toFixed(2)}€
      </p>
      <p className="description-popin">{description}</p>
      <p>Souhaitez-vous recevoir ce journal <span>une seule fois</span> ou <span>régulièrement</span> ?</p>
      <div className="wrapper-btns">
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
