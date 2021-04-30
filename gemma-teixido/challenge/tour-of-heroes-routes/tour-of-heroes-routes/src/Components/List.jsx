/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ListMore from './ListMore';
import heroes from '../utils';

function List() {
  const [selectedHero, setSelectedHero] = useState(null);
  return (
    <div className="listNameContainer">
      <ul className="listContainer__ul-Name">
        {heroes.map((hero) => (
          <li>
            {hero.superhero}
            <button type="button" onClick={() => setSelectedHero(hero)}>INFO</button>
            {selectedHero === hero && <ListMore hero={hero} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
