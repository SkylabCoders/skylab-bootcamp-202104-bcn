import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
import Search from './components/Search';
import List from './components/List';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of heroes</h1>
        <nav>
          <a href=" ">Dashboard</a>
          <a href=" ">Heroes</a>
        </nav>
        <Route path="/" component={Dashboard} />
        <Route path="/heroes" component={List} />
        <Route path="/detail" component={Detail} />
        <Search />
      </BrowserRouter>
    </>
  );
}

export default App;
