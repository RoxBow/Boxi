import { formValueSelector, reduxForm } from 'redux-form'; // ES6
import { connect } from 'react-redux';
import FormCompanyEmployees from './FormCompanyEmployees';

const selectorForm = formValueSelector('signupEmployees');

const mapStateToProps = state => ({
  emails: selectorForm(state, 'emails')
});

const FormCompanyEmployeesContainer = connect(
  mapStateToProps
)(FormCompanyEmployees);

export default reduxForm({
  form: 'signupEmployees'
})(FormCompanyEmployeesContainer);
