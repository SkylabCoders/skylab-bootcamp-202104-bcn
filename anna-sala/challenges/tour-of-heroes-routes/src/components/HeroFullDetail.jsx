import React from 'react';
import { useParams } from 'react-router';
import heroes from '../assets/heroes';

function HeroesFullDetail() {
  const { heroId } = useParams();
  const myHeroes = heroes.find((hero) => hero.id === heroId);
  return (
    <article>
      <h2>
        Hero Name:
        {' '}
        {myHeroes.superhero}
      </h2>
      <span>
        ID:
        {' '}
        {myHeroes.id}
      </span>
      <p>
        The first appearance of this hero was
        {' '}
        {myHeroes.first_appearance}
        {' '}
        and the charachter was
        {' '}
        {myHeroes.characters}
        {' '}
      </p>

    </article>
  );
}
export default HeroesFullDetail;
