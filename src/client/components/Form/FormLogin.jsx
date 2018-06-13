import '../../styles/_form.scss';
import React from 'react';
import { Field } from 'redux-form';
import Input from './Input';

const FormLogin = ({ login, submitting }) => (
  <form onSubmit={login}>
    <Field name="email" type="text" component={Input} label="email" />
    <Field name="password" type="password" component={Input} label="Password" />
    <button type="submit" disabled={submitting}>
      Connecter
    </button>
  </form>
);

export default FormLogin;
