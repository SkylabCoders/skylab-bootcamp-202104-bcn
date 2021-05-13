import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigator from './Components/NavigatorComponent/Navigator';
import TasksList from './Components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Navigator />
      <Switch>
        <Route path="/" exact component={TasksList} />
      </Switch>
    </div>
  );
}

export default App;
