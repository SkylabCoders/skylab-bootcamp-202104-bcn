import React from 'react';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
          <ProductsList/>
          <Cart/>
      </Provider>
    </>
  );
}

export default App;
