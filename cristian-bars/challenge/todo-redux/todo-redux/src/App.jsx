import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TodoListComponent from './components/todoList/TodoListComponent';
import store from './redux/store/index';

function App() {
  return (
    <Provider store={store}>
      <h1>TO DO LIST</h1>
      <TodoListComponent />
    </Provider>
  );
}

export default App;
