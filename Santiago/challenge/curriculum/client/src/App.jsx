import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <h1>Cirruculum</h1>
      </div>
    </Provider>
  );
}

export default App;
