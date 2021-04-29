import React from 'react';
import './styles.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Nav from './components/ui/Nav';
import DashBoard from './components/dashboard/DashBoard';
import HeroList from './components/heroes/HeroList';
import HeroDetail from './components/heroes/HeroDetail';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <Nav />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/heroes" component={HeroList} />
            <Route exact path="/heroes/:heroId" component={HeroDetail} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
