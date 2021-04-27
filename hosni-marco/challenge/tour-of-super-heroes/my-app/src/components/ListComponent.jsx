import React from 'react';
import Heroes from '../assets/Heroes';
import ListItemComponent from './ListItemComponent';

function ListComponent() {
  return (
    <ul className="list__container">
      {
        Heroes.map(({
          id, superhero, publisher, alterEgo
        }) => <ListItemComponent key={`${id}`} id={id} superhero={superhero} publisher={publisher} alterEgo={alterEgo} />)

        }

    </ul>
  );
}

export default ListComponent;
