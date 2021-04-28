import React from 'react';
import { useParams } from 'react-router';
import HEROES from '../constants/heroe.mock';
import './HeroDetail.css';

function HeroDetail() {
  const { heroId } = useParams();
  const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  return (
    <>
      <div>
        <h2>
          {selectedHero?.name}
          {' '}
          Details
        </h2>
      </div>
    </>
  );
}

export default HeroDetail;
