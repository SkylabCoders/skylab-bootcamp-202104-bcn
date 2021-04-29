import React from 'react';
import './App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <InputTask />
      <TaskList />
    </div>
  );
}

export default App;
