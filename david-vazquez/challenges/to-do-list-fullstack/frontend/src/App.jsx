import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import InputTask from './components/InputTask';
import store from './redux/store/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>To Do List</h1>
          <InputTask />
        </div>
      </Provider>
    </>
  );
}

export default App;
