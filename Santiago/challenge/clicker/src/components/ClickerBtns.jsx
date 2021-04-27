import React, { useState } from 'react';
/* eslint-disable react/react-in-jsx-scope */

const ClickerBtns = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default ClickerBtns;
