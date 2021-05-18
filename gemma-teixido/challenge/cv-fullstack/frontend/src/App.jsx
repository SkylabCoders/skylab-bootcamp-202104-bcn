import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Presentation from './components/Presentation/index';
import configureStore from './redux/store/index';
import Details from './components/Details/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/Details" exact component={Details} />
          <Presentation />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
