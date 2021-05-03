import React from 'react';
import './App.css';
import Characters from './Components/Characters';
import Planets from './Components/Planets';
import Starships from './Components/Starships';
import Apitest from './Components/Apitest';

function App() {
  return (
    <div className="App">
      <Starships />
      <Characters />
      <Planets />
      <Apitest />
    </div>
  );
}

export default App;
