import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Characters from './Components/Characters';
import Planets from './Components/Planets';
import Starships from './Components/Starships';
import Apitest from './Components/Apitest';
import configureStore from './redux/store/configureStore';
import Login from './Components/Login';

function App() {
  return (
    <Provider store={configureStore}>
      <Login />
      <Apitest />
      <Starships />
      <Characters />
      <Planets />
    </Provider>
  );
}

export default App;
