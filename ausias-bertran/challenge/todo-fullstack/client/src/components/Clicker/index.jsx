import React, { useState } from 'react';

const Clicker = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
      <div>{counter }</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Clicker;
