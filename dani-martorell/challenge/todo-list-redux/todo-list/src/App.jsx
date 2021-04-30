import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import InputComponent from './components/inputComponent/InputComponent';
import TasksList from './components/TasksList/TasksList';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1 className="header-title">tasks</h1>
          <InputComponent />
        </header>
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;
