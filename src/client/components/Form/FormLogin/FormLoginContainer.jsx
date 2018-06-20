import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { requestLogin } from '../../../redux/User/action';
import { hidePopin } from '../../../redux/Popin/action';

import FormLogin from './FormLogin';

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(requestLogin(e)),
  hidePopin: () => dispatch(hidePopin())
});

const FormLoginConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLogin);

export default reduxForm({
  form: 'login'
})(FormLoginConnect);
