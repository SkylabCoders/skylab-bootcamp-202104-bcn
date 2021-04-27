import React from 'react';

const HeroesList = ({ heroesList, selectHero }) => (
  <div className="heroesList">
    {heroesList.map((heroe, id) => 
    <button key={id} onClick={() => selectHero(heroe)} className="heroListElement">
        {heroe.name}
    </button> )}
    
  </div>
);

export default HeroesList;