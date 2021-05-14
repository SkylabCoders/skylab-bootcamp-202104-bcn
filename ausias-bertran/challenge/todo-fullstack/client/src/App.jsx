import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ShowList from './components/ShowList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShowList />
      </div>
    </Provider>
  );
}

export default App;
