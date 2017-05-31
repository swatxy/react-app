import { combineReducers } from 'redux';
import counter from './counter';
import indices from './indices';

const reducers = combineReducers({
  counter,
  indices
});

export default reducers;