import React from 'react';
import './App.css';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  return (
    <div className="App">
      <h1>New app</h1>
      <HeroListComponent li1="Hola 1" />
    </div>
  );
}

export default App;
