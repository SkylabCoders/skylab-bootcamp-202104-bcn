import React from 'react';

const HeroesList = ({ heroesList, setAsSelected }) => (
  <div className="heroesList">
    {heroesList.map((hero, key) => <button key={key} onClick={() => setAsSelected(hero)} className="heroListElement">{hero.name}</button>)}
  </div>
);

export default HeroesList;
