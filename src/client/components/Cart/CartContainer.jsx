import { connect } from 'react-redux';
import Cart from './Cart';
import { removeProduct, closeCart } from '../../redux/Cart/action';

const mapStateToProps = state => ({
  listProduct: state.cart.products,
  totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = dispatch => ({
  removeProduct: productId => dispatch(removeProduct(productId)),
  closeCart: () => dispatch(closeCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
