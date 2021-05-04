import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HeaderLayout from './application/components/layout/Layout';
import MostViwedMovies from './common/components/slider-most-viewed/MostViwedMovies';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HeaderLayout />
        <div>
          <MostViwedMovies />
        </div>
      </Provider>
    </div>
  );
}

export default App;
