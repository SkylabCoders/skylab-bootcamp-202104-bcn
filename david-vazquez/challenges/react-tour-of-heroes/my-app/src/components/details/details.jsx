import React from 'react';
import { useParams } from 'react-router';
import heroes from '../../assets/heroes';

function Details() {
  const { heroId } = useParams();
  const foundHero = heroes.find((hero) => hero.id.toString() === heroId);
  return (
    <article>
      <h2>{`Hola, hero ${foundHero.superhero}`}</h2>
    </article>
  );
}

export default Details;
