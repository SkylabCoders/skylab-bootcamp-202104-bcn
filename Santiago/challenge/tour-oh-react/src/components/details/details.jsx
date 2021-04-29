/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import heroes from '../../store/store';

const HeroDetailComponent = () => {
  const { heroId } = useParams();
  const myHero = heroes.find((hero) => hero.id === heroId);
  return (
    <section>
      <Link to={`/details/:heroId${myHero.id}`} />
      <h3>
        Full
        {' '}
        {myHero.superhero}
        {' '}
        details
      </h3>
      <ul>
        <li>
          ID:
          {' '}
          {myHero.id}
        </li>
        <li>
          NAME:
          {' '}
          {myHero.superhero}
        </li>
        <li>
          PUBLISHER:
          {' '}
          {myHero.publisher}
        </li>
        <li>
          ALTER EGO:
          {' '}
          {myHero.alterEgo}
        </li>
        <li>
          FIRST APPEARANCE:
          {' '}
          {myHero.first_appearance}

        </li>
        <li>
          CHARACTERS:
          {' '}
          {myHero.characters}

        </li>
      </ul>
    </section>
  );
};

export default HeroDetailComponent;
