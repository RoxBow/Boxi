import { connect } from 'react-redux';
import Banner from './Banner';

const mapStateToProps = state => ({
  listService: state.service.listService
});

export default connect(
  mapStateToProps
)(Banner);
