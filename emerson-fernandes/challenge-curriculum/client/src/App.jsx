import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Provider } from 'react-redux';
import Main from './components/Main';
import configureStore from './redux/store';

function App() {
  return (
    <div>
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
