import { connect } from 'react-redux';
import { showPopin } from '../../../redux/Popin/action';
import Step1 from './Step1';

const mapStateToProps = state => ({
  selectedProduct: state.cart.selectedProduct
});

const mapDispatchToProps = dispatch => ({
  showPopin: popinType => dispatch(showPopin(popinType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1);
