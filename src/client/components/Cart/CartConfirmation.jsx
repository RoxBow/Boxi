import 'antd/dist/antd.css';
import '../../styles/_cart.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants';

const CartConfirmation = () => (
  <div className="wrapper-cart-confirmation-content container wrapper-padding">
    <h2>Merci, Charles</h2>
    <div className="wrapper-summary">
      <p>
        Vous avez commandé <span>3 journaux</span> en <span>abonnement</span> de la catégorie
        Sports.
      </p>
      <p>
        Vous les recevrez dès la date de leur publication au créneau souhaité.<br />
        Nous vous enverrons une notification le moment venu.
      </p>
      <p>
        Le montant de l’abonnement est de <span>127,58€</span>.
      </p>
      <p>Ce montant vous sera prélevé sur votre paie tous les mois.</p>
      <p>
        Je valide votre demande, vous recevrez <span>une confirmation par mail</span>.<br />
        Vérifiez votre budget pour voir combien de demandes vous disposez encore.
      </p>
    </div>
    <Link to={PATH.HOME} className="btn-action btn-secondary">
      Retour à la page d'accueil
    </Link>
  </div>
);

export default CartConfirmation;
