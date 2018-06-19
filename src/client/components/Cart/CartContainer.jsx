import { connect } from 'react-redux';
import Cart from './Cart';
import { withRouter } from 'react-router';
import { removeProduct, closeCart } from '../../redux/Cart/action';

const mapStateToProps = state => ({
  listProduct: state.cart.products,
  totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = dispatch => ({
  removeProduct: productId => dispatch(removeProduct(productId)),
  closeCart: () => dispatch(closeCart())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
