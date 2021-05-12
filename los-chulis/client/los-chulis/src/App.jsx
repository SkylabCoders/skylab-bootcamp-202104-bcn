import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShopingCart';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <ProductList />
      <ShoppingCart />
    </Provider>
  );
}

export default App;
