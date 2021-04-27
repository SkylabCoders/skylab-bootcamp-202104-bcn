import React from 'react';
import heroes from '../data/heroes';
import SelectedHero from './SelectedHero';

const HeroesList = ({ SelectedHero, heroes }) => (
  <section>
    <ul>
      {heroes.map((element) => (
        <>
          <li key={element.name}>
            <button onClick={() => SelectedHero(hero)}>+</button>
            {element.name}
          </li>
        </>
      ))}
    </ul>
  </section>
);

export default HeroesList;
