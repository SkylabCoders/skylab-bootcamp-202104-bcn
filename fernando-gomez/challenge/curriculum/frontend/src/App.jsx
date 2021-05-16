import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
