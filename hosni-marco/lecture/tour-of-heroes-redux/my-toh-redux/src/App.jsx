import React from 'react';
import './styles.css';
import './App.css';
import Dashboard from './components/Dashboard/index';

function App() {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <a href="Dashboard">Dashboard</a>
        <a href="Heroes">Heroes</a>
      </nav>
      <Dashboard />
    </>
  );
}

export default App;
