import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/ui/Nav';
import Dashboard from './components/dashboard/Dashboard';
import HeroList from './components/heroes/HeroList';
import HeroDetails from './components/heroes/HeroDetails';
import store from './components/redux/store';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={HeroList} />
          <Route exact path="/details:heroId" component={HeroDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
