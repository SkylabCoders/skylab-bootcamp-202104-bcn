import React from 'react';
import GlobalApp from './styles/globalStyles';
import List from '../pages/Home';

function Application() {
  return (
    <GlobalApp>
      <h2>Application Page Index</h2>
      <List />
    </GlobalApp>
  );
}

export default Application;
