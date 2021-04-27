import React from 'react';
import heroes from '../../store/store';

const List = () => {
  const myHereos = heroes.map((hero) => (
    <li>
      {hero.id}
      {' - '}
      {hero.name}
    </li>
  ));

  return (
    <div>
      <ul>
        {myHereos}
      </ul>
    </div>
  );
};
export default List;
