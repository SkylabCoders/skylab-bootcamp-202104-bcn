import React from 'react';
import './App.css';
import './styles.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <a href=" ">Dashboard</a>
        <a href=" ">Heroes</a>
      </nav>
      <Dashboard />
    </>
  );
}

export default App;
