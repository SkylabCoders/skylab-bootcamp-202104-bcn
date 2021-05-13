import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import List from './components/List';
import store from './redux/store/index';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      <List />
    </Provider>
  );
}

export default App;
