/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/stores';
import Todolist from './components/Todolist/Todolist';
import './App.css';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <header>
          <h1>My ToDo List</h1>
        </header>
        <Switch>
          <Route component={Todolist} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
