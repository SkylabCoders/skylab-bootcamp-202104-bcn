import React from 'react';
import heroes from '../data/heroes';

const HeroesList = () => (
  <section>
    <ul>
      {heroes.map((element) => <li key={element.id}>{element.name}</li>)}
    </ul>
  </section>
);

export default HeroesList;
