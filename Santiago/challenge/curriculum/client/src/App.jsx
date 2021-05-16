import React from 'react';
import { Provider } from 'react-redux';
import DashBoard from './components/Dashboard/Dashboard';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <DashBoard />
      </div>
    </Provider>
  );
}

export default App;
