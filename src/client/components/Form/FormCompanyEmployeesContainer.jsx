import { formValueSelector, reduxForm } from 'redux-form'; // ES6
import { connect } from 'react-redux';
import { registerEmployees } from '../../redux/User/action.js';
import FormCompanyEmployees from './FormCompanyEmployees';

const selectorForm = formValueSelector('signupEmployees');

const mapStateToProps = state => ({
  emails: selectorForm(state, 'emails')
});

const mapDispatchToProps = dispatch => ({
  registerEmployees: emails => dispatch(registerEmployees(emails))
});

const mergeProps = ({ emails }, dispatchProps) => ({
  registerEmployees: e => {
    e.preventDefault();
    dispatchProps.registerEmployees(emails);
  }
});

const FormCompanyEmployeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FormCompanyEmployees);

export default reduxForm({
  form: 'signupEmployees'
})(FormCompanyEmployeesContainer);
