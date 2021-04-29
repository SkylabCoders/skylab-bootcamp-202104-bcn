import React from 'react';
import './App.css';
import './styles.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';
import HeroList from './components/hero/HeroList';
import HeroDetails from './components/hero/HeroDeatil';
import Nav from './components/ui/nav';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/heroes" component={HeroList} />
            <Route exact path="/heroes/" component={HeroDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
