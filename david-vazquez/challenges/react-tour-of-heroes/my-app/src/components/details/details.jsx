import React from 'react';
import { useParams } from 'react-router';
import heroes from '../../assets/heroes';

function Details() {
  const { heroId } = useParams();
  const foundHero = heroes.find((hero) => hero.id.toString() === heroId);
  return (
    <article>
      <h2>{`Hi! I'm ${foundHero.superhero}`}</h2>
      <p>{`My alter ego is ${foundHero.alter_ego}`}</p>
      <p>{`I appeared at first time in ${foundHero.first_appearance}`}</p>
      <p>{`My publisher is ${foundHero.publisher}`}</p>
    </article>
  );
}

export default Details;
