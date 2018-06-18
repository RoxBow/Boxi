import React from 'react';
import { Button } from 'antd';
import { STEP3BUY } from '../../../constants';

const Step2 = ({ selectedProduct, showPopin, hidePopin }) => {
  const { title, price } = selectedProduct;

  return (
    <div>
      <p>
        {title} - {price.toFixed(2)}€
      </p>
      <p>Ok c'est noté, j'ai ajouté l'abonnement au quotidien {title} à votre panier.</p>
      <p>L'abonnement sera de {price.toFixed(2)}€ par jour</p>
      <p>Souhaitez-vous continuer vos achats ou valider votre demande ?</p>
      <div>
        <Button onClick={() => hidePopin()} className="btn-action btn-secondary">
          Retourner aux produits
        </Button>
        <Button onClick={() => showPopin(STEP3BUY)} className="btn-action btn-primary">
          Valider
        </Button>
      </div>
    </div>
  );
};

export default Step2;
