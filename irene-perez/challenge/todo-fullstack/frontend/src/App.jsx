import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components';
import configureStore from './redux/stores';
import './App.css';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <h1>To Do List</h1>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
