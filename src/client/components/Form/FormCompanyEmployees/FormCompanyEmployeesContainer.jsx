import { formValueSelector, reduxForm } from 'redux-form'; // ES6
import { connect } from 'react-redux';
import FormCompanyEmployees from './FormCompanyEmployees';
import { setValidCompany } from '../../../redux/Company/action';

const selectorForm = formValueSelector('signupEmployees');

const mapStateToProps = state => ({
  emails: selectorForm(state, 'emails'),
  company: state.company.info
});

const mapDispatchToProps = dispatch => ({
  setValidCompany: () => dispatch(setValidCompany())
});

const FormCompanyEmployeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCompanyEmployees);

export default reduxForm({
  form: 'signupEmployees'
})(FormCompanyEmployeesContainer);
