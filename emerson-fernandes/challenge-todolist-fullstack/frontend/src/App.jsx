import React from 'react';
import TasksTodo from './components/TasksTodo';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store=()}>
        <TasksTodo />
      </Provider>
    </div>
  );
}

export default App;
