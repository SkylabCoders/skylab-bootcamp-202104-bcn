import React from 'react';
import heroes from '../../store/store';

const List = () => {
  const myHereos = heroes.map(({ id, name }) => (
    <li className="list__item" key={`${id} - ${name}`}>
      <a href="./../details/details.jsx">
        {id}
        {' - '}
        {name}
      </a>
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
