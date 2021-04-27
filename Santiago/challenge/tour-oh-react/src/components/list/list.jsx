/* eslint-disable react/prop-types */
import React from 'react';

const List = ({ heroesList, setSelectedHero }) => {
  const myHereos = heroesList.map((hero) => (
    <li className="list__item">
      <button type="button" onClick={() => setSelectedHero(hero)}>
        {hero.id}
      </button>
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
