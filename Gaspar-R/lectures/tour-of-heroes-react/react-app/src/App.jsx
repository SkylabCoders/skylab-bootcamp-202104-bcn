import React from 'react';
import './style.css';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashborad';
import HeroDetail from './components/HeroDetail';
import HeroesList from './components/HeroesList';
import NotFound from './components/NotFound';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/list">Heroes List</Link>
            <Link to="/404">404</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/detail/:heroId" component={HeroDetail} />
            <Route path="/list" component={HeroesList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
