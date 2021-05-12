import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store';

const initialState = {
  cart: [
    {
      name: 'Ibuprofeno'
    },
    {
      name: 'Crema Solar'
    },
    {
      name: 'Mascarilla'
    }
  ]
};

ReactDOM.render(

  <Provider store={configureStore(initialState)}>
    <App />
  </Provider>,

  document.getElementById('root')
);
