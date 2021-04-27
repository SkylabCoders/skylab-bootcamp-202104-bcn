import React from 'react';
import heroes from '../../store/store';

const List = () => {
  const myHereos = heroes.map(({ id, name }) => (
    <li className="list__item" key={`${id} - ${name}`}>
      {id}
      {' - '}
      {name}
    </li>
  ));

  return (
    <div>
      <ul className="list__conatiner">
        {myHereos}
      </ul>
    </div>
  );
};
export default List;
