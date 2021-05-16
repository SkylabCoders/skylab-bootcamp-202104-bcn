import React from 'react';
import { Provider } from 'react-redux';
import DashBoard from './components/AboutMe';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <DashBoard />
    </Provider>
  );
}

export default App;
