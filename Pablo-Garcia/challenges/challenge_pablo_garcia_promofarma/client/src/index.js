import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './application/store/index';
import Application from './application/application';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
