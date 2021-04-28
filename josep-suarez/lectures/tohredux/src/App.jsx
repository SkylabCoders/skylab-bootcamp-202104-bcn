import React from 'react';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import './index.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
// import Search from './components/Search';
import List from './components/List';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Tour of heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/heroes">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/heroes" component={List} />
          <Route path="/detail/:heroId" component={Detail} />
          <Route component={NotFound} />
        </Switch>
        {/* <Search /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
