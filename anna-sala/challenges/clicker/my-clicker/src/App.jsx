import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function subtract() {
    setCount(count - 1);
  }
  return (
    <div>
      <button type="button" onClick={() => subtract()}>Restar</button>
      <button type="button" onClick={() => handleClick()}>Sumar</button>
      <Counter handleClick={count} />
    </div>
  );
}

export default App;
