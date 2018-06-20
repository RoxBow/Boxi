import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form'; // ES6
import { setCompany } from '../../../redux/Company/action';
import FormCompany from './FormCompany';

const selectorForm = formValueSelector('signupCompany');

const mapStateToProps = state => ({
  name: selectorForm(state, 'name'),
  director: selectorForm(state, 'director'),
  email: selectorForm(state, 'email'),
  password: selectorForm(state, 'password'),
});

const mapDispatchToProps = dispatch => ({
  setCompany: company => dispatch(setCompany(company))
});

const FormCompanyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCompany);

export default reduxForm({
  form: 'signupCompany'
})(FormCompanyContainer);
