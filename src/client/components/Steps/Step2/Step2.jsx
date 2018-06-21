import React from 'react';
import '../../../styles/_step.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { PATH } from '../../../constants';

const Step2 = ({ selectedProduct, hidePopin, addProduct, openCart }) => {
  const { title, price, productId } = selectedProduct;

  return (
    <div>
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
            onClick={() => {
              addProduct(selectedProduct);
              hidePopin();
            }}
            className="btn-action btn-secondary btn-back-to-products"
          >
            Continuer mes achats
          </Button>
          <Link
            to={PATH.LIVRAISON}
            onClick={() => {
              addProduct(selectedProduct);
              hidePopin();
              openCart();
            }}
            className="btn-action btn-primary btn-finish"
          >
            Finaliser la commande
          </Link>
        </div>
      </div>
      <div className="wrapper-popin-bottom">
        <img src={`../../../images/${productId}.jpg`} alt={`image magazine ${productId}`} />
      </div>
    </div>
  );
};

export default Step2;
