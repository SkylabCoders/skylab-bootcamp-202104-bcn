import React from 'react';
import { Provider } from 'react-redux';
import List from './components/List';
import Cart from './components/Cart';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <>
        <div className="shop">
          <List />
          <Cart />
        </div>
      </>
    </Provider>
  );
}

export default App;
