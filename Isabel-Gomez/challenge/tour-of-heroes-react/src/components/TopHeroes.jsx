import React from 'react';
import heroes from '../data/heroes';

const TopHeroes = () => (
  <section>
    <ul>
      {heroes.slice(0, 5).map((element) => <li key={element.id}>{element.name}</li>)}
    </ul>
  </section>
);

export default TopHeroes;
