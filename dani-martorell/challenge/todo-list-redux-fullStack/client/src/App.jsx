import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>

      <h1>Tour of Heroes</h1>

    </Provider>
  );
}

export default App;
