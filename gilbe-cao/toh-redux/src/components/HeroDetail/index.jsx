import React from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './HeroDetail.css';

function HeroDetail() {
  const { heroId } = useParams();
  const selectedHero = HEROES.find((hero) => hero.id === +heroId);

  return (
    <div>
      <h2>
        {selectedHero?.name}
        {' '}
        Details
      </h2>
    </div>
  );
}

export default HeroDetail;
