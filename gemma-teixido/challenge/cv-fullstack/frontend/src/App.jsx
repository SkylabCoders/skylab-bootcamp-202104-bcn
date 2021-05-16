import React from 'react';
import { Provider } from 'react-redux';
import Presentation from './components/Presentation/index';
import configureStore from './redux/store/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <Presentation />
    </Provider>
  );
}

export default App;
