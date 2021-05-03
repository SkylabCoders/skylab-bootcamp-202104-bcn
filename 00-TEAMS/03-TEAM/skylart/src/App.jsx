import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import configureStore from './redux/store';
import './styles.scss';
import Header from './components/Common/Header';

function App() {
  return (
    <Provider store={configureStore}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
