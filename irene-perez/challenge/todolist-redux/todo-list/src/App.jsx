import React from 'react';
import { Provider } from 'react-redux';
import InputTask from './components/InputTask';
import './App.css';

function App() {
  return (
    <>
      <Provider>
        <div className="App">
          <h1>To do List</h1>
          <InputTask />
        </div>
      </Provider>
    </>
  );
}

export default App;
