import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './components/dashboard';
import store from './redux/store/index';
import ShowList from './components/showList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
        <ShowList />
      </div>
    </Provider>
  );
}

export default App;
