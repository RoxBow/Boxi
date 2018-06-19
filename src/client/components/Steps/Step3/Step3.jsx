import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/_step1.scss';

const Step3 = ({ selectedProduct, hidePopin }) => {
  const { title, price } = selectedProduct;

  return (
    <div className="wrapper-popin">
      <p className="title-popin">
        {title} - {price.toFixed(2)}€
      </p>
      <p className="description-popin">Très bien je sauvegarde votre demande</p>

      <div className="wrapper-btns">
        <Link to='/' onClick={() => hidePopin()} className="btn-action btn-primary">
          Confirmer
        </Link>
      </div>
    </div>
  );
};

export default Step3;
