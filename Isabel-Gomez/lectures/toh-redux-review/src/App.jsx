import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard/Dashboard';
import HeroList from './components/Heroes/HeroList';
import HeroDetail from './components/Heroes/HeroDetail';
import Nav from './components/ui/Nav';
import store from './redux/store/store';
import './styles.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/heroes" component={HeroList} />
            <Route path="/heroes/:heroId" component={HeroDetail} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
