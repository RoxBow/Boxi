import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  isCartOpen: state.cart.isOpen
});

export default connect(mapStateToProps)(Home);
