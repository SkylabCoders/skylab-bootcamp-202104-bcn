import React from 'react';
import { Provider } from 'react-redux';
import List from './components/List';
import Cart from './components/Cart';
import store from '../src/redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <>
        <List />
        <Cart />
      </>
    </Provider>
  );
}

export default App;
