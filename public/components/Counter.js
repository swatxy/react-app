import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({counter, counterActions}) => (
  <p>
    Clicked: {counter} times
    {' '}
    <button onClick={counterActions.increment}>+</button>
    {' '}
    <button onClick={counterActions.decrement}>-</button>
    {' '}
    <button onClick={counterActions.incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => counterActions.incrementAsync()}>Increment async</button>
    {' '}
    <button onClick={counterActions.decrementIfEven}>Decrement if even</button>
    {' '}
    <button onClick={() => counterActions.decrementAsync()}>Decrement async</button>
  </p>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  counterActions: PropTypes.object.isRequired
};

export default Counter;