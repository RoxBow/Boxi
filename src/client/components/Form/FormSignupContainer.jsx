import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { requestSignUp } from '../../redux/User/action';
import validateForm from '../../helpers/validateForm';
import FormSignUp from './FormSignup';

const mapDispatchToProps = dispatch => ({
  signUp: e => {
    dispatch(requestSignUp(e));
  }
});

const FormSignupConnect = connect(
  null,
  mapDispatchToProps
)(FormSignUp);

export default reduxForm({
  form: 'signUp',
  validateForm
})(FormSignupConnect);
