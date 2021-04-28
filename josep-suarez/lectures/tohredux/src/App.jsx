import React from 'react';
import './index.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Search from './components/Search';

function App() {
  return (
    <>
      <h1>Tour of heroes</h1>
      <nav>
        <a href=" ">Dashboard</a>
        <a href=" ">Heroes</a>
      </nav>
      <Dashboard />
      <Search />
    </>
  );
}

export default App;
