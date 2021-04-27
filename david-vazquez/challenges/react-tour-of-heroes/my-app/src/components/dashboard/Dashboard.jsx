import React from 'react';
import heroes from '../../assets/heroes';
import HeroListItemComponent from '../list/heroListItemComponen';

function Dashboard() {
  return (
    <div>
      <h2>My top Heroes</h2>
      <ul className="list__container">{heroes.slice(1, 6).map(({ id, superhero }) => <HeroListItemComponent id={id} name={superhero} key={`${id}`} />)}</ul>
    </div>
  );
}

export default Dashboard;
