import '../../../styles/_form.scss';
import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import InputText from '../../InputText/InputText';
import { PATH } from '../../../constants';

const { HOME } = PATH;

const FormLogin = ({ login, submitting, isAuthenticated, hidePopin }) => (
  <form onSubmit={login}>
    <Field name="email" type="email" component={InputText} label="Email" />
    <Field name="password" type="password" component={InputText} label="Password" />
    <button type="submit" disabled={submitting}>
      Se connecter
    </button>
    {isAuthenticated && redirectToHome(hidePopin)}
  </form>
);

const redirectToHome = hidePopin => {
  hidePopin();
  return <Redirect to={HOME} />;
};

export default FormLogin;
