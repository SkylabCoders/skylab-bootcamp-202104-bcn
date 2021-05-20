import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './application/store/index';
import Application from './application/application';
import GlobalApp from './application/styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalApp>
      <Provider store={configureStore()}>
        <Application />
      </Provider>
    </GlobalApp>
  </React.StrictMode>,
  document.getElementById('root')
);
