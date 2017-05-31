import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
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