import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/store';
import CreateTask from './components/createTask/CreateTask';

function App() {
  return (

    <Provider store={store}>
      <header>
        <h2>To Do List</h2>
      </header>
      <main>
        <CreateTask />
      </main>
    </Provider>

  );
}

export default App;
