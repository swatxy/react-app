import * as constants from '../constants';

export function increment() {
  return {
    type: constants.INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: constants.DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState();
    if (counter % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function decrementIfEven() {
  return (dispatch, getState) => {
    const {counter} = getState();
    if ((counter & 1) === 0) {
      return;
    }
    dispatch(decrement());
  };
}

export function decrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement());
    }, delay);
  };
}