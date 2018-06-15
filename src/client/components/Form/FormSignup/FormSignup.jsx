import '../../../styles/_form.scss';
import React from 'react';
import { Field } from 'redux-form';
import Input from '../Input';
import axios from 'axios';

class FormSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { emailId } = this.props.match.params;

    axios
      .get('/user/getEmailSignup', {
        params: {
          emailId
        }
      })
      .then(res => {
        const { email } = res.data;
        this.props.initialize({ email });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { signUp, submitting, email } = this.props;

    return (
      <form onSubmit={e => signUp(e)}>
        <Field name="email" type="email" label="Email" component={Input} value={email} disabled />
        <Field name="password" type="password" component={Input} label="Password" />
        <button type="submit" disabled={submitting}>
          Valider
        </button>
      </form>
    );
  }
}

export default FormSignUp;
