import React from 'react';
import './index.css';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <h1>Tour of heroes redux</h1>
      <nav type="button">
        <a href=" ">Dashboard</a>
        <a href=" ">Heroes</a>
      </nav>
      <Dashboard />
    </>
  );
}

export default App;
