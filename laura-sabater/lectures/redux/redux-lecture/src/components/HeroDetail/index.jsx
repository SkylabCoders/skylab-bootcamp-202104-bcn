import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './HeroDetail.css';

function HeroDetail() {
  const { heroId } = useParams();
  // const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  const [selectedHero, setSelectedHero] = useState();

  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  return (
    <div>
      <h2>
        {selectedHero?.name}
        {' '}
        details
      </h2>
    </div>
  );
}

export default HeroDetail;
