import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <ProductsList />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
