import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/Cart/action';
import Products from './Products';

const mapStateToProps = state => ({
  cart: state.cart.products,
});

const mapDispatchToProps = dispatch => ({
  addProduct: productId => dispatch(addProduct(productId)),
  removeProduct: productId => dispatch(removeProduct(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
