import React from 'react';
import { useParams } from 'react-router-dom';
import './heroDetails.css';
import HEROES from '../Constants/heroes-mock';

function HeroDetails() {
  const { heroId } = useParams();
  const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  return (
    <>
      <div>
        <h2>
          {selectedHero?.name}
          {'  '}
          Details
        </h2>
      </div>
    </>
  );
}

export default HeroDetails;
