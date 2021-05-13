import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import List from './components/list';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <List />
      </Provider>
    </>
  );
}

export default App;
