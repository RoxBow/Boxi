import { connect } from 'react-redux';
import { fetchService } from '../../redux/Service/action';
import QuickActions from './QuickActions';

const mapStateToProps = state => ({
  listService: state.service.listService
});

const mapDispatchToProps = dispatch => ({
  fetchService: () => dispatch(fetchService())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickActions);
