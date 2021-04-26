import './App.css';
import React from 'react';
import Button from './button';

function App() {
  const increment = () => console.log('sumando');
  const decrement = () => console.log('restando');
  return (
    <div className="App">
      <header className="App-header">
        <Button operation={increment} sign="+" />
        <Button operation={decrement} sign="-" />

      </header>

    </div>

  );
}

export default App;
