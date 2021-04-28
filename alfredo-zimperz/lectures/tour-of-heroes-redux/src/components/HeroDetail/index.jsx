import React from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './heroDetail.css';

const HeroDetail = () => {
  const { heroId } = useParams();
  const selectesdHero = HEROES.find((hero) => hero.id === +heroId);
  return (
    <div>
      <h2>
        {selectesdHero.name}
        {' '}
        details
      </h2>
    </div>
  );
};

export default HeroDetail;
