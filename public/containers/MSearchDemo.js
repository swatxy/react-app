import * as indicesActionCreators from '../actions/indices';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MSearch from '../components/MSearch';

const mapStateToProps = (state) => ({
  indices: state.indices
});

const mapDispatchToProps = (dispatch) => ({
  indicesActions: bindActionCreators(indicesActionCreators, dispatch)
});

const MSearchDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MSearch);

export default MSearchDemo;