import { connect } from 'react-redux';
import Header from './Header';
import { openCart } from '../../redux/Cart/action';

const mapStateToProps = state => ({
  listProduct: state.cart.products
});

const mapDispatchToProps = dispatch => ({
  openCart: () => dispatch(openCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
