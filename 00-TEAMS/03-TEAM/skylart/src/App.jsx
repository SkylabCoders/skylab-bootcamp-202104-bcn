import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import configureStore from './redux/store';
import './styles.scss';

function App() {
  return (
    <Provider store={configureStore}>
      <h1>Skyl&apos;Art</h1>
      <Home />
    </Provider>
  );
}

export default App;
