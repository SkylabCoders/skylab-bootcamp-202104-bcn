import React from 'react';
import heroes from '../data/heroes';
import Card from './common/Card';

const HeroesList = () => (
  <section>
    <ul>
      {heroes.map((element) => (
        <Card key={element.id} data={element} />
      ))}
    </ul>
  </section>
);

export default HeroesList;
