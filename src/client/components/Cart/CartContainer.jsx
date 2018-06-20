import { connect } from 'react-redux';
import Cart from './Cart';
import { withRouter } from 'react-router';
import { removeProduct, closeCart, payService } from '../../redux/Cart/action';

const mapStateToProps = state => ({
  listProduct: state.cart.products,
  totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = dispatch => ({
  removeProduct: productId => dispatch(removeProduct(productId)),
  closeCart: () => dispatch(closeCart()),
  payService: () => dispatch(payService())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
