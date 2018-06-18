import { connect } from 'react-redux';
import Header from './Header';
import { openCart } from '../../redux/Cart/action';

const mapDispatchToProps = dispatch => ({
  openCart: () => dispatch(openCart())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
