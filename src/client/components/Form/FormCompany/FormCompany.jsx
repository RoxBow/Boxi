import '../../../styles/_form.scss';
import React from 'react';
import axios from 'axios';
import { Field } from 'redux-form';
import InputText from '../../InputText/InputText';

class FormCompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.registerCompany = this.registerCompany.bind(this);
  }

  registerCompany(e) {
    e.preventDefault();
    const { name, director, email, password, setCompany } = this.props;

    axios
      .post('/company/createCompany', {
        name,
        director,
        email,
        password
      })
      .then(res => {
        if (res.data.err) console.log('err company: ', res.data.err);
        setCompany(res.data.company);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { submitting } = this.props;

    return (
      <form onSubmit={this.registerCompany}>
        <Field name="name" type="text" component={InputText} label="Nom de votre entreprise" />
        <Field name="director" type="text" component={InputText} label="Votre nom" />
        <Field name="email" type="email" component={InputText} label="Votre addresse e-mail" />
        <Field name="password" type="password" component={InputText} label="Votre mot de passe" />

        <button type="submit" disabled={submitting}>
          Continuer
        </button>
      </form>
    );
  }
}

export default FormCompany;
