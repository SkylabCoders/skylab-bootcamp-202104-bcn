import React from 'react';
import { Link } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './HeroList.css';

const HeroesList = () => (
  <section>
    <ul>
      {HEROES.map((hero) => <li><Link to={`/detail/${hero.id}`}>{hero.name}</Link></li>)}
    </ul>
  </section>
);

export default HeroesList;
