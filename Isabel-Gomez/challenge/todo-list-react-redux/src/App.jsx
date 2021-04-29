import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/stores/index';

import './App.css';
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
