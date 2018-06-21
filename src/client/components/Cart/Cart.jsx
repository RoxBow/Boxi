import 'antd/dist/antd.css';
import '../../styles/_cart.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import CartEmpty from './CartEmpty';
import { PATH } from '../../constants';
import { withRouter } from 'react-router';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listProduct, totalPrice, closeCart, removeProduct, payService } = this.props;
    const currentPath = this.props.match.path;

    return (
      <div className="wrapper-cart">
        <div className="wrapper-cart-content">
          <span onClick={closeCart} className="close" />
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
            {currentPath === PATH.LIVRAISON ? (
              <Link to={PATH.RECAP} onClick={payService} className="btn-action btn-primary">
                Finaliser la commande
              </Link>
            ) : (
              <Link to={PATH.LIVRAISON}>Valider</Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Cart);
