import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShopingCart';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <h1>PromoPharma</h1>
      <main className="main">
        <ProductList />
        <ShoppingCart />
      </main>
    </Provider>
  );
}

export default App;
