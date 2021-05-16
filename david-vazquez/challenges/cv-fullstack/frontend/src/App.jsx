import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Header from './components/Header';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <Header />
      <Resume />
    </Provider>
  );
}

export default App;
