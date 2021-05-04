import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Characters from './Components/Characters';
import Planets from './Components/Planets';
import Starships from './Components/Starships';
import Apitest from './Components/Apitest';
import configureStore from './redux/store/configureStore';
import ChooseFaction from './Components/ChooseFaction';

// TODO Move credentials to .env
function App() {
  return (

    <Provider store={configureStore}>
      <Apitest />
      <Starships />
      <Characters />
      <Planets />
      <ChooseFaction />
    </Provider>

  );
}

export default App;
