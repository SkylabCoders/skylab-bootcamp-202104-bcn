import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    </>

  );
}

export default App;
