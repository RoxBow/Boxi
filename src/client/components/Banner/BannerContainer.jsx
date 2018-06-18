import { connect } from 'react-redux';
import { setSelectedService } from '../../redux/Service/action';
import Banner from './Banner';

const mapStateToProps = state => ({
  listService: state.service.listService
});

const mapDispatchToProps = dispatch => ({
  setSelectedService: selectedService => dispatch(setSelectedService(selectedService))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
