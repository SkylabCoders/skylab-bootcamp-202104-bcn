import React from 'react';
import './App.css';
import Cart from './components/Cart/index';
import ProductList from './components/Product-list';

function App() {
  return (
    <div>
      <h1>PROMOFARMA</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
