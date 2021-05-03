import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          header test
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    </Provider>
  );
}

export default App;
