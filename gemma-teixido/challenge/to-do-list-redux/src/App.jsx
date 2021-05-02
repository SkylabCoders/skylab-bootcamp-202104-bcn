import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <header>
        <h1>To-do-list</h1>
      </header>
      <div className="bigContainer">
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
