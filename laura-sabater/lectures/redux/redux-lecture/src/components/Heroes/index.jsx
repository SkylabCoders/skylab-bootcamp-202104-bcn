import React from 'react';
import HEROES from '../../constants/heroes.mock';

function HeroesList() {
  return (
    <div>
      {HEROES.map((hero) => <li>{hero.name}</li>)}
    </div>
  );
}

export default HeroesList;
