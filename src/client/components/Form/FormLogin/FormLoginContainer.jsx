import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { requestLogin } from '../../../redux/User/action';
import FormLogin from './FormLogin';

const mapDispatchToProps = dispatch => ({
  login: e => {
    dispatch(requestLogin(e));
  }
});

const FormLoginConnect = connect(
  null,
  mapDispatchToProps
)(FormLogin);

export default reduxForm({
  form: 'login'
})(FormLoginConnect);
