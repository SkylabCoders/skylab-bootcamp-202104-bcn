import React from 'react';
import Header from '../elements/header';
import TittleH1 from './tittle';
import FourHeroes from './four-heroes-list';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <div>
        <TittleH1 />
        <FourHeroes />
      </div>
    </div>
  );
}

export default Dashboard;
