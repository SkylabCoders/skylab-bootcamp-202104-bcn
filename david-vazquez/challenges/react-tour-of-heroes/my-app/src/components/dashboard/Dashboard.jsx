import React from 'react';
import heroes from '../../assets/heroes';
import HeroListComponent from '../list/HeroListComponen';

function Dashboard() {
  return (
    <div>
      <h2>My top Heroes</h2>
      <ul className="list__container">{heroes.slice(1, 6).map(({ id, superhero }) => <HeroListComponent id={id} name={superhero} key={`${id}`} />)}</ul>
    </div>
  );
}

export default Dashboard;
