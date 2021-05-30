import React from 'react';
import { Provider } from 'react-redux';
import './styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/ui/Nav';
import HeroList from './components/heroes/HeroList';
import Dashboard from './components/dashboard/Dashboard';
import HeroDetail from './components/heroes/HeroDetail';
import configureStore from './redux/store/configureStore';

function App() {
  return (
    <Provider store={configureStore}>
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
  );
}

export default App;
