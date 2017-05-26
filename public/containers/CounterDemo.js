import * as counterActionCreators from '../actions/counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(counterActionCreators, dispatch);
};

const CounterDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterDemo;