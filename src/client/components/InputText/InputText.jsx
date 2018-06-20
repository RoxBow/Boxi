import 'antd/dist/antd.css';
import '../../styles/_input-text.scss';
import React from 'react';

const InputText = ({ input, label, disabled, type, meta: { touched, error, warning } }) => (
  <div className="wrapper-input-text">
    <input {...input} placeholder={label} type={type} disabled={ disabled }/>
    <span className={input.value ? 'label_up' : ''}>{label}</span>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export default InputText;
