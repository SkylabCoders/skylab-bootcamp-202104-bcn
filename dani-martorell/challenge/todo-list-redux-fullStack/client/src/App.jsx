import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './App.css';
import List from './components/List';
import Input from './components/Input';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>Tasks Organizer</h1>
      <Input />
      <List />
    </Provider>
  );
}

export default App;
