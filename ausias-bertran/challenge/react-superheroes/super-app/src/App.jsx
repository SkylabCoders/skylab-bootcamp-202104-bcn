import React from 'react';
import './App.css';
import CreateTitle from './Components/tourtTitle';

function App() {
  return (
    <>
      <header>
        <CreateTitle />
        <nav>
          <ul>
            <li>Heroes</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default App;
