/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import heroes from '../../store/store';

const List = () => {
  //   heroes.map((hero) => console.log(({ value: hero.id, text: hero.name })));
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
