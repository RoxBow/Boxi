import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../../../styles/_step1.scss';

const Step2 = ({ selectedProduct, hidePopin, addProduct }) => {
  const { title, price } = selectedProduct;

  return (
    <div className="wrapper-popin">
      <p className="title-popin">
        {title} - {price.toFixed(2)}€
      </p>
      <p className="description-popin">
        Ok c'est noté, j'ai ajouté l'abonnement au quotidien {title} à votre panier.
      </p>
      <p className="description-popin">
        L'abonnement sera de <span>{price.toFixed(2)}€</span> par jour
      </p>
      <p className="description-popin">
        Souhaitez-vous continuer vos achats ou valider votre demande ?
      </p>
      <div className="wrapper-btns">
        <Button
          onClick={() => hidePopin()}
          className="btn-action btn-secondary btn-back-to-products"
        >
          Retourner aux produits
        </Button>
        <Link
          to="/cart/recap"
          onClick={() => {
            hidePopin();
            addProduct(selectedProduct);
          }}
          className="btn-action btn-primary"
        >
          Finaliser la commande
        </Link>
      </div>
    </div>
  );
};

export default Step2;
