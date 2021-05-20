import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PersonalData from './components/PersonalData/personalData';
import Header from './components/Header/header';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <Header />
      <PersonalData />
    </Provider>
  );
}

export default App;
