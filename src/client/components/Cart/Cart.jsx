import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_cart.scss';
import React from 'react';
import { Row, Col, Icon, Button } from 'antd';
import Newspaper from '../Newspaper/Newspaper';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-cart">
        <div className="wrapper-cart-content">
            <div className="wrapper-cart-header">
                <h2>Voici votre séléction :</h2>
                <p>Souhaitez-vous valider votre demande ?</p>
            </div>
            
            <div className="wrapper-cart-body">
                <Newspaper price="1.99 €" name="Public" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />

                <Newspaper price="1.99 €" name="Closer" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />

                <Newspaper price="1.99 €" name="Oops" description="Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité Lorem ipséité" />
            </div>
            
            <div className="wrapper-cart-footer">
                <p>Total : {this.props.totalPrice}</p>
                <p>Ce montant sera prélevé sur votre paie mensuel</p>
                <Button>Valider</Button>
            </div>
        </div>
      </div>
    );
  }
}

export default Cart;
