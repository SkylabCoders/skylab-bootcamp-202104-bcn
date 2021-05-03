import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import configureStore from './redux/store';
import Header from './components/Common/Header';
import './styles/styles.scss';

function App() {
  return (
    <Provider store={configureStore}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
