import '../../styles/_form.scss';
import React from 'react';
import Input from './Input';
import { Field, FieldArray } from 'redux-form';
import axios from 'axios';

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Ajouter employé
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button type="button" title="Remove employe" onClick={() => fields.remove(index)}>
          Supprimer
        </button>
        <h4>Member #{index + 1}</h4>

        <Field name={`${member}.email`} type="text" component={Input} label="Email" />
      </li>
    ))}
  </ul>
);

class FormCompanyEmployees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.registerEmployees = this.registerEmployees.bind(this);
  }

  registerEmployees(e) {
    e.preventDefault();
    const { emails } = this.props;

    axios
      .post('/users/createEmployees', {
        emails
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { submitting } = this.props;

    return (
      <form onSubmit={this.registerEmployees}>
        <FieldArray name="emails" component={renderMembers} />
        <button type="submit" disabled={submitting}>
          Valider
        </button>
      </form>
    );
  }
}

export default FormCompanyEmployees;
