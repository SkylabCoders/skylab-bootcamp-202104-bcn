import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TasksList from './Components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Switch>
        <Route path="/" exact component={TasksList} />
      </Switch>
    </div>
  );
}

export default App;
