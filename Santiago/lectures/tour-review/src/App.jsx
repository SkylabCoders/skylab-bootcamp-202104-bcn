import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './components/UI/Nav';
import Dashboard from './components/dashboard/Dashboard';
import HeroList from './components/heroes/HeroList';
import HeroDetail from './components/heroes/HeroDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>TOUR OF HEROES</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={HeroList} />
          <Route exact path="/heroes/:heroId" component={HeroDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
