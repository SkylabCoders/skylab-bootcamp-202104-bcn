import React, { useState } from 'react';

function Buttons() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Buttons;
