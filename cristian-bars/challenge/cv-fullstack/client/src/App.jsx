import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import store from './redux/store/index';

function App() {
  return (
    <Provider store={store()}>
      <div className="App">
        <h1>Hello World!</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
