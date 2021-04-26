import './App.css';
import React, { useState } from 'react';
import Button from './button';
import Screen from './resultScreen';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div className="App">
      <header className="App-header">
        <Button operation={increment} sign="+" />
        <Screen value={counter} />
        <Button operation={decrement} sign="-" />

      </header>

    </div>

  );
}

export default App;
