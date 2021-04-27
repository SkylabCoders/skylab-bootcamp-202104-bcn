import React from 'react';
import HeroListComponent from './Components/HeroListComponent';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Heroes</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <HeroListComponent />
    </>
  );
}

export default App;
