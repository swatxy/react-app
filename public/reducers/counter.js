import * as constants from '../constants';

const counter = (state = 0, action) => {
  switch (action.type) {
    case constants.INCREMENT_COUNTER:
      return state + 1;
    case constants.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;