import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <button type="button" onClick={decrement}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increment}>+</button>
    </div>
  );
}

export default Button;
