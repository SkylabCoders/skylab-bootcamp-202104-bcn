/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
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