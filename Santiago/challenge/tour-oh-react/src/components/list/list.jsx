/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MoreDetails from '../details/moreDetails';
import heroes from '../../store/store';

const List = () => {
  const [selectedHero, setSelectedHero] = useState(null);
  const myHereos = heroes.map((hero) => (
    <li className="list__item">
      {hero.id}
      --
      <button type="button" onClick={() => setSelectedHero(hero)}>See some details</button>
      {selectedHero === hero && <MoreDetails hero={hero} />}
    </li>
  ));

  return (
    <div>
      <h2>Full list of heroes</h2>
      <ul className="list__conatiner">
        {myHereos}
      </ul>
    </div>
  );
};
export default List;
