import { connect } from 'react-redux';
import { removeProduct } from '../../redux/Cart/action';
import { buyProduct } from '../../redux/User/action';
import Products from './Products';

const mapStateToProps = state => ({
  cart: state.cart.products
});

const mapDispatchToProps = dispatch => ({
  removeProduct: productId => dispatch(removeProduct(productId)),
  buyProduct: (popinType, selectedProduct) => dispatch(buyProduct(popinType, selectedProduct))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
