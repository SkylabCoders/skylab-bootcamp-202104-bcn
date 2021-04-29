import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import TaskSite from './componentes/TaskSite';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>TO-DO List</h1>
        <Switch>
          <Route path="/" exact component={TaskSite} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
