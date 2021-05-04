import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HeaderLayout from './application/components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HeaderLayout />
      </Provider>
    </div>
  );
}

export default App;
