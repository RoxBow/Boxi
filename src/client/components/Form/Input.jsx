import React from 'react';

const Input = ({ input, label, disabled, type, meta: { touched, error, warning } }) => (
  <div className="input">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} disabled={ disabled }/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export default Input;
