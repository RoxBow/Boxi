import { connect } from 'react-redux';
import { fetchService } from '../../redux/Service/action';
import Services from './Services';

const mapStateToProps = state => ({
  listService: state.service.listService
});

const mapDispatchToProps = dispatch => ({
  fetchService: () => dispatch(fetchService())
});


export default connect(mapStateToProps, mapDispatchToProps)(Services);
