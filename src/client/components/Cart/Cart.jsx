import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_cart.scss';
import React from 'react';
import { Button } from 'antd';
import CartProduct from './CartProduct';
import CartEmpty from './CartEmpty';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.payService = this.payService.bind(this);
  }

  payService() {
    axios.post('/cart/paymentService').catch(err => {
      console.log(err);
    });
  }

  render() {
    const { listProduct, totalPrice, closeCart, removeProduct } = this.props;

    return (
      <div className="wrapper-cart">
        <div className="wrapper-cart-content">
          {listProduct ? (
            <div>
              <div className="wrapper-cart-header">
                <h2>Voici votre sélection :</h2>
                <p>Souhaitez-vous valider votre demande ?</p>
              </div>

              <div className="wrapper-cart-body">
                {listProduct.map((product, i) => (
                  <CartProduct key={i} {...product} removeProduct={removeProduct} />
                ))}
              </div>
            </div>
          ) : (
            <CartEmpty />
          )}

          <div className="wrapper-cart-footer">
            <p>Total : {totalPrice ? totalPrice.toFixed(2) : 0}€</p>
            <p>Ce montant sera prélevé sur votre paie mensuel</p>
            <Button onClick={closeCart}>Fermer</Button>
            <Button onClick={this.payService}>Valider</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
