import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
