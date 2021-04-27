import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import List from './components/list/list';
import HeroDetailComponent from './components/details/details';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <List />
      <HeroDetailComponent />
    </div>
  );
}
export default App;
