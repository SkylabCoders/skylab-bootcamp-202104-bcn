import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import heroes from '../assets/heroes';

const HeroDetailComponent = () => {
  const { heroId } = useParams();
  const myHero = heroes.find((hero) => hero.id === heroId);
  if (myHero) {
    return (
      <section>
        <h1>{myHero.superhero}</h1>
        <ul>
          <li>
            Publisher:
            {' '}
            {myHero.publisher}
          </li>
          <li>
            First Appearance:
            {' '}
            {myHero.firstAppearance}
          </li>
          <li>
            Alter Ego:
            {' '}
            {myHero.alterEgo}
          </li>
          <li>
            Characters:
            {' '}
            {myHero.characters}
          </li>
        </ul>
        <Link to="./">
          Go Back to List
        </Link>
      </section>
    );
  }
  return (<h1>404 NOT Found</h1>);
};
export default HeroDetailComponent;
