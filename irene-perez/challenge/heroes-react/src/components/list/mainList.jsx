import React from 'react';
import Header from '../elements/header';
import TittleDetails from './tittle';
import HeroesList from './heroes-list';

function List() {
  return (
    <div className="Dashboard">
      <Header />
      <TittleDetails />
      <HeroesList />
      <div />
    </div>
  );
}

export default List;
