import '../../../styles/_form.scss';
import React from 'react';
import axios from 'axios';
import { Field, FieldArray } from 'redux-form';
import InputText from '../../InputText/InputText';

const renderMembers = ({ fields }) => (
  <div>
    <p>
      <button className="btn-add" type="button" onClick={() => fields.push({})} />
    </p>
    {fields.map((member, index) => (
      <div className="wrapper-input-fields" key={index}>
        <h4>Employé #{index + 1}</h4>

        <Field name={`${member}.email`} type="text" component={InputText} label="Email" />
        <button type="button" title="Remove employe" onClick={() => fields.remove(index)}></button>
      </div>
    ))}
  </div>
);

class FormCompanyEmployees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.registerEmployees = this.registerEmployees.bind(this);
  }

  registerEmployees(e) {
    e.preventDefault();
    const { emails, company, setValidCompany } = this.props;

    axios
      .post('/company/createEmployees', {
        emails,
        companyId: company._id
      })
      .then(res => {
        setValidCompany();
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
          Continuer
        </button>
      </form>
    );
  }
}

export default FormCompanyEmployees;
