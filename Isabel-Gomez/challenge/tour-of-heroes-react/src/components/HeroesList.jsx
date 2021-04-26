import React from 'react';
import heroes from '../data/heroes';

const HeroesList = () => (
  <section>
    <ul>
      {heroes.map((element) => <li>{element.name}</li>)}
    </ul>
  </section>
);

export default HeroesList;
