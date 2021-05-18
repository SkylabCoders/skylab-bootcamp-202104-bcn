import React from 'react';
import { Provider } from 'react-redux';
import TasksTodo from './components/TasksTodo';
import './App.css';
import configureStore from './redux/store';

function App() {
  return (
    <div>
      <Provider store={configureStore()}>
        <TasksTodo />
      </Provider>
    </div>
  );
}

export default App;
