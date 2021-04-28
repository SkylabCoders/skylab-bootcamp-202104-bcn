import './App.css';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import List from './components/list/List';
import Details from './components/details/details';

function App() {
  function loadBoard() {
    return (<p>Hola</p>);
  }

  return (
    <body>
      <header>
        <h1>Tour of Heroes</h1>
        <ul>
          <li><button type="button" onClick={() => loadBoard()}>Dashboard</button></li>
          <li><button type="button" onClick={() => loadBoard()}>List</button></li>
        </ul>
      </header>
      <Dashboard />
      <List />
      <Details />
    </body>
  );
}

export default App;
