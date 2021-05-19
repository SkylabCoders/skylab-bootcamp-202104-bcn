import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PersonalData from './components/personalData';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <header className="App-header">
        <h1>Curriculum</h1>
        <PersonalData />
      </header>
    </Provider>
  );
}

export default App;
