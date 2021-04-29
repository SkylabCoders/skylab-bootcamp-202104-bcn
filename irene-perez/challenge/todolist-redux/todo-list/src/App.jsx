import React from 'react';
import { Provider } from 'react-redux';
import InputTask from './components/InputTask';
import store from './redux/store/index';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>To do List</h1>
          <InputTask />
        </div>
      </Provider>
    </>
  );
}

export default App;
