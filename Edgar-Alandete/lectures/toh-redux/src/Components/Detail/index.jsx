import React from 'react';
import { useParams } from 'react-router-dom';
import heroes from '../../constants/heroes.mock';
import './HeroDetail.css';

function Detail() {
  const { heroId } = useParams();
  const selectedHero = heroes.find((hero) => hero.id === +heroId);
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

export default Detail;
