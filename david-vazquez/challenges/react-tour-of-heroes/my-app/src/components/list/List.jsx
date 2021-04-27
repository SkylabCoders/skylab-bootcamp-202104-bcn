import React from 'react';
import heroes from '../../assets/heroes';
import HeroListItemComponent from './heroListItemComponen';

function List() {
  return (
    <div>
      <h2>My heroes list</h2>
      <ul className="list__container">
        {heroes.map(({ id, superhero }) => <HeroListItemComponent id={id} name={superhero} key={`${id}`} />)}
      </ul>
    </div>
  );
}

export default List;
