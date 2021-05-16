import React from 'react';
import './styles.css';
import Cart from './components/Cart/index';
import ProductList from './components/Product-list';

function App() {
  return (
    <div>
      <main className="main">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
