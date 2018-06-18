import React from 'react';
import { Link } from 'react-router-dom';

const Step3 = ({ selectedProduct, hidePopin }) => {
  const { title, price } = selectedProduct;

  return (
    <div>
      <p>
        {title} - {price.toFixed(2)}€
      </p>
      <p>Très bien je sauvegarde votre demande</p>
      <Link to='/' onClick={() => hidePopin()} className="btn-action btn-primary">
        Confirmer
      </Link>
    </div>
  );
};

export default Step3;
