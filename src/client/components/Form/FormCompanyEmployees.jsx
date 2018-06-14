import '../../styles/_form.scss';
import React from 'react';
import { Field } from 'redux-form';
import Input from './Input';
import { reduxForm } from 'redux-form';
import { formValueSelector } from 'redux-form'; // ES6
import { connect } from 'react-redux';

class FormCompanyEmployees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputList: []
    };

    this.addField = this.addField.bind(this);
  }

  addField() {
    const { inputList } = this.state;
    const lengthInputList = inputList.length;

    this.setState({
      inputList: inputList.concat(
        <Field name={`email${lengthInputList}`} key={lengthInputList} type="text" component={Input} label="email" />
      )
    });
  }

  render() {
    const { signUpEmployees, submitting } = this.props;

    return (
      <form onSubmit={e => e.preventDefault()}>
        <button onClick={() => this.addField()}>Add new field</button>

        {this.state.inputList.map((input, index) => {
          return input;
        })}

        <button type="submit" disabled>
          Valider
        </button>
      </form>
    );
  }
}

const selector = formValueSelector('signupEmployees');

const mapDispatchToProps = dispatch => ({
  signUpEmployees: () => dispatch(signUpEmployees())
});

const FormCompanyEmployes = connect(
  state => {
    console.log(state);
    return { }
  },
  mapDispatchToProps
)(FormCompanyEmployees);

export default reduxForm({
  form: 'signupEmployees'
})(FormCompanyEmployes);
