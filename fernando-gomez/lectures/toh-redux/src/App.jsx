import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import './styles.css';

function App() {
  return (
    <>
      <h1>Tour of heroes</h1>
      <nav>
        <a href=" ">Dashboard</a>
        <a href=" ">Heroes</a>
      </nav>
      <Dashboard />
    </>
  );
}

export default App;
