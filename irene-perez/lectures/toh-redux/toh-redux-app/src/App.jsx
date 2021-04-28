import React from 'react';
import './styles.css';
import './App.css';
import Dashboard from './components/Dashboard';

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
