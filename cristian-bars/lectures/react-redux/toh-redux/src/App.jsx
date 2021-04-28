import React from 'react';
import './styles.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './componentes/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <nav>
          <a href=" ">Dashboard</a>
          <a href=" ">Heroes</a>
        </nav>
        <Route path="/" component={Dashboard} />
      </BrowserRouter>
    </>
  );
}

export default App;
