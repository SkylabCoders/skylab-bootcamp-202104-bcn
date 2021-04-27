import React from 'react';
import { useParams } from 'react-router';
import heroes from '../assets/heroes';

const HeroDetailComponent = () => {
  const { heroId } = useParams();
  const myHero = heroes.find((hero) => hero.id === heroId);
  if (myHero) {
    return (
      <h1>{myHero.superhero}</h1>
    );
  }
  return (<h1>404 NOT Found</h1>);
};
export default HeroDetailComponent;
