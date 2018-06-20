import { connect } from 'react-redux';
import PageCompany from './PageCompany';

const mapStateToProps = state => ({
  stepEmployee: state.company.stepEmployee,
  companyValid: state.company.companyValid
});

export default connect(mapStateToProps)(PageCompany);
