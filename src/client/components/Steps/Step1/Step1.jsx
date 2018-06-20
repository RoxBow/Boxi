import React from 'react';
import { Button } from 'antd';
import { STEP2BUY } from '../../../constants';
import '../../../styles/_step.scss';

const Step1 = ({ selectedProduct, showPopin }) => {
  const { title, price, description, productId } = selectedProduct;

  return (
    <div>
      <div className="wrapper-popin">
        <p className="title-popin">
          {title} - {price.toFixed(2)}€
        </p>
        <p className="description-popin">{description}</p>
        <p>
          Souhaitez-vous recevoir ce journal <span>une seule fois</span> ou{' '}
          <span>régulièrement</span> ?
        </p>
        <div className="wrapper-btns">
          <Button onClick={() => showPopin(STEP2BUY)} className="btn-action btn-secondary">
            Juste une fois
          </Button>
          <Button onClick={() => showPopin(STEP2BUY)} className="btn-action btn-primary">
            S'abonner
          </Button>
        </div>
      </div>
      <div className="wrapper-popin-bottom">
        <img src={`../../../images/${productId}.jpg`} alt={`image magazine ${productId}`} />
      </div>
    </div>
  );
};

export default Step1;
