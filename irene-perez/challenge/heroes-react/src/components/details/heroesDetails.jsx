/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import heroes from '../elements/heroes';

function HeroesDetails() {
  const { heroId } = useParams();
  const hero = heroes.find((id) => (id.toString() === heroId));
  return (
    <article>
      <p>{`${hero.superhero} id:${hero.id}`}</p>
      <p>{`${hero.superhero} publiseh:${hero.published}`}</p>
      <p>{`${hero.superhero} alter-ego:${hero.alter_ego}`}</p>
    </article>
  );
}

export default HeroesDetails;
