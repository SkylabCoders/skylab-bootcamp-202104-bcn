import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import TasksList from './components/TasksList';
import TaskAdder from './components/TaskAdder';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <TaskAdder />
        <TasksList />
      </Provider>
    </>
  );
}

export default App;
