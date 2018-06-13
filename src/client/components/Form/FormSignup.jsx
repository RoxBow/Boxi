import '../../styles/_form.scss';
import React from 'react';
import { Field } from 'redux-form';
import Input from './Input';

const FormSignUp = ({ signUp, submitting }) => (
  <form onSubmit={signUp}>
    <Field name="password" type="password" component={Input} label="Password" />
    <button type="submit" disabled={submitting}>
      Valider
    </button>
  </form>
);

export default FormSignUp;
