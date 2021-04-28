import React from 'react';
import './HeroDetail.css';
import { useParams } from 'react-router';
import HEROES from '../Constants/Heroes.mock';

function HeroDetail() {
  const { heroId } = useParams();
  const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  return (
    <div>
      <h2>
        {selectedHero.name}
        {' '}
        Details
      </h2>
    </div>
  );
}

export default HeroDetail;
