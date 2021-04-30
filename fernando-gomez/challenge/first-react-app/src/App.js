import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Incrementor = ({ incrementor }) => (
  <button className="incrementorButton" onClick={incrementor}>
    +
  </button>
);

const Decrementor = ({ decrementor }) => (
  <button className="incrementorButton" onClick={decrementor}>
    -
  </button>
);

function App() {
  const [count, setCount] = useState(0);

  const incrementor = () => {
    setCount(count + 1);
  };

  const decrementor = () => {
    setCount(count - 1);
  };

  return (
    <div className="incrementor">
      <Decrementor decrementor={decrementor} />
      <p>{count}</p>
      <Incrementor incrementor={incrementor} />
    </div>
  );
}

export default App;
