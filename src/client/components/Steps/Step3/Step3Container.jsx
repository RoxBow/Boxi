import { connect } from 'react-redux';
import { hidePopin } from '../../../redux/Popin/action';
import Step3 from './Step3';

const mapStateToProps = state => ({
  selectedProduct: state.cart.selectedProduct
});

const mapDispatchToProps = dispatch => ({
  hidePopin: () => dispatch(hidePopin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3);
