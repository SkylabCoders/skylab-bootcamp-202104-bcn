import React, { useState } from 'react';

function ButtonComponent() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button type="button" onClick={increment}>+</button>
      <p>{counter}</p>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
}

export default ButtonComponent;
