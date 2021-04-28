import React from 'react';
import { useParams } from 'react-router';
import './herodetail.css';
import heroes from '../../assets/heroes';

function HeroDetail() {
  const { heroId } = useParams();
  const myHero = heroes.find((hero) => hero.id === +heroId);

  return (
    <div>
      <h4>
        This is my hero
        {' '}
        {myHero?.name}
      </h4>
    </div>
  );
}

export default HeroDetail;
