import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import ProductList from './components/ProductsList';

function App() {
  return (
    <Provider store={configureStore}>
      <div>
        <h1>Team frontend</h1>
        <ProductList />
      </div>
    </Provider>

  );
}

export default App;
