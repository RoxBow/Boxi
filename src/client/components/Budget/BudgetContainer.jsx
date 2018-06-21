import { connect } from 'react-redux';
import Budget from './Budget';

const mapStateToProps = state => ({
  budget: state.user.budget
});

export default connect(mapStateToProps)(Budget);