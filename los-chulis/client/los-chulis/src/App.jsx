import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShopingCart';
import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <main className="main">
        <h1>PromoPharma</h1>
        <ProductList />
        <ShoppingCart />
      </main>
    </Provider>
  );
}

export default App;
