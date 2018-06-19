import 'antd/dist/antd.css';
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
          <span onClick={closeCart} className="close"></span>
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
            <p className="cart-total">Total :</p>
            <p className="cart-price">{totalPrice ? totalPrice.toFixed(2) : 0}€</p>
            <Button onClick={this.payService} className="btn-action btn-primary">Valider</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
