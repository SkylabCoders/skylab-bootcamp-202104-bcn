/* eslint-disable react/prop-types */
import React from 'react';

const HeroesList = ({ heroList, setSelectedHero }) => {
  const listHeroes = heroList.map((superhero) => (
    <li>
      {superhero.superhero}
      <button type="button" onClick={() => setSelectedHero(superhero)}>+</button>
    </li>
  ));
  return (
    <div>
      <ul>
        { listHeroes }
      </ul>
    </div>
  );
};

export default HeroesList;
