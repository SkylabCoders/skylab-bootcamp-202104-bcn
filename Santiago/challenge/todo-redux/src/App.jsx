import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import store from './redux/store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TO DO LIST</h1>
        <InputTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
