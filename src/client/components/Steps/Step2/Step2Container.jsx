import { connect } from 'react-redux';
import { showPopin, hidePopin } from '../../../redux/Popin/action';
import Step2 from './Step2';

const mapStateToProps = state => ({
  selectedProduct: state.cart.selectedProduct
});

const mapDispatchToProps = dispatch => ({
  showPopin: popinType => dispatch(showPopin(popinType)),
  hidePopin: () => dispatch(hidePopin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2);
