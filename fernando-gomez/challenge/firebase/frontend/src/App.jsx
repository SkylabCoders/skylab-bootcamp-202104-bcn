import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <Login />
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
