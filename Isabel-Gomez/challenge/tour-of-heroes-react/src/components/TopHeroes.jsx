import React from 'react';
import heroes from '../data/heroes';

const TopHeroes = () => (
  <div className="topHeroes-container">
    <ul className="topHeroes__items">
      {heroes.slice(0, 4).map((element) => (
        <>
          <li key={element.id}>{element.name}</li>
        </>
      ))}
    </ul>
  </div>
);

export default TopHeroes;
