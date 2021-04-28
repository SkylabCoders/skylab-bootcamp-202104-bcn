import React from 'react';
import './style.css'
import './App.css';
import Dashboard from './components/Dashborad';
// import <index className="css"></index>

function App() {
  return (
    <> 
    <h1> Tour of Heroes</h1>
    <nav>
      <a href="">Dashboard</a>
      <a href="">Heroes </a>
    </nav>
    <Dashboard></Dashboard>
    </>
  );
}

export default App;
