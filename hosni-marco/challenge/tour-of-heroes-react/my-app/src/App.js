// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Dashboard from './Dashboard'
import HeroList from './HeroList'
import HeroDetails from './HeroDetails'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard/>
        <HeroList/>
        <HeroDetails/>
      </header>
    </div>
  );
}

export default App;
