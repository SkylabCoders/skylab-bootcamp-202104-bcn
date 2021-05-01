import React from 'react';
import './App.css';
import Characters from './Components/Characters';
import Planets from './Components/Planets';
import Starships from './Components/Starships';

function App() {
  return (
    <div className="App">
      <Starships />
      <Characters />
      <Planets />
    </div>
  );
}

export default App;
