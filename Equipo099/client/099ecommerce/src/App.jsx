import React from 'react';
import { Provider } from 'react-redux';
import List from './components/List';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Provider>
      <>
        <Cart />
        <List />
      </>
    </Provider>
  );
}

export default App;
