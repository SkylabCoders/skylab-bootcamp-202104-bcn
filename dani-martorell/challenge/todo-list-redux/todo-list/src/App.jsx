import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
        <InputComponent />
      </header>
      <TasksList />
    </div>
  );
}

export default App;
