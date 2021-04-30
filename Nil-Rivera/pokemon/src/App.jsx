import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import PokeList from './components/pokemons list/PokeList';
import configureStore from './redux/store/configureStore';

function App() {
  return (
    <Provider store={configureStore}>
      <Header />
      <PokeList />
    </Provider>
  );
}

export default App;
