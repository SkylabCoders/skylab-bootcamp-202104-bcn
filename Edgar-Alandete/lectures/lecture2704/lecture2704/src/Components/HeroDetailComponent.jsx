import React from 'react';
import { useParams } from 'react-router';
import heroes from '../assets/heroes';

const HeroDetailComponent = () => {
  const { heroId } = useParams();
  console.log(heroId);
  const myHero = heroes.find((hero) => hero.id === heroId);
  console.log(myHero);
  return (
    <article>
      <button type="button" onClick={() => { console.log('closo'); }}>Close</button>
      <h2>{myHero.superhero}</h2>
      <p>ghiobgjidfjisfvisufnsnvsinvusivfsiun</p>
    </article>
  );
};

export default HeroDetailComponent;
