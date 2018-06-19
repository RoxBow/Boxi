import { connect } from 'react-redux';
import { hidePopin } from '../../../redux/Popin/action';
import { addProduct } from '../../../redux/Cart/action';
import Step2 from './Step2';

const mapStateToProps = state => ({
  selectedProduct: state.cart.selectedProduct
});

const mapDispatchToProps = dispatch => ({
  hidePopin: () => dispatch(hidePopin()),
  addProduct: product => dispatch(addProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2);
