import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { requestSignUp } from '../../../redux/User/action';
import FormSignUp from './FormSignup';

const selectorForm = formValueSelector('signUp');

const mapStateToProps = state => ({
  email: selectorForm(state, 'email'),
  password: selectorForm(state, 'password'),
});

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => {
    dispatch(requestSignUp(email, password));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
  signUp: e => {
    e.preventDefault();
    dispatchProps.signUp(stateProps.email, stateProps.password);
  },
});

const FormSignupConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FormSignUp);

export default reduxForm({
  form: 'signUp'
})(FormSignupConnect);
