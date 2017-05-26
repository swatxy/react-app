import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({counter, increment, decrement, incrementIfOdd, incrementAsync, decrementIfEven, decrementAsync}) => (
  <p>
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
    {' '}
    <button onClick={decrementIfEven}>Decrement if even</button>
    {' '}
    <button onClick={() => decrementAsync()}>Decrement async</button>
  </p>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementIfEven: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired
};

export default Counter;