import { connect } from 'react-redux';
import PageCompany from './PageCompany';
import { showPopin } from '../../redux/Popin/action';

const mapStateToProps = state => ({
  stepEmployee: state.company.stepEmployee,
  companyValid: state.company.companyValid
});

const mapDispatchToProps = dispatch => ({
  showPopin: popinType => dispatch(showPopin(popinType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageCompany);
