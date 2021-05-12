import React from 'react';
import './App.css';
import ProductList from './components/Product-list/ProductsList';
import Cart from './components/Cart/index';

function App() {
  return (
    <div>
      <h1>Team frontend</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
