import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/stores';

import './App.css';

function App() {
  return (
    <Provider store={store()}>

      <h1>Tour of Heroes</h1>

    </Provider>
  );
}

export default App;
