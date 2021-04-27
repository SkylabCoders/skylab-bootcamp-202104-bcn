import React from 'react';
import { useParams } from 'react-router';
import heroes from '../assets/heroes';

const HeroDetailComponent = () => {
  const { heroId } = useParams();
  const myHero = heroes.find((hero) => hero.id === heroId);
  return (
    <article>
      <h2>{myHero.superhero}</h2>
      <p>ghiobgjidfjisfvisufnsnvsinvusivfsiun</p>
    </article>
  );
};

export default HeroDetailComponent;
