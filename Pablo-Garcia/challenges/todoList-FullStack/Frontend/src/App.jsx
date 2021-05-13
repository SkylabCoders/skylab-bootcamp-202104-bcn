import React from 'react';
import { Provider } from 'react-redux';
import store from './common/store';

function App() {
  return (
    <Provider store={store()}>
      <div className="App">
        <div>To do list</div>
      </div>
    </Provider>

  );
}

export default App;
