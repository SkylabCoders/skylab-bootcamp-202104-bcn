import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './HeroDetail.css';

const HeroDetail = () => {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();

  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  const handleNameChange = (event) => {
    setSelectedHero({
      ...setSelectedHero,
      name: event.target.value,
    });
  };

  return (

    selectedHero ? (
      <div>
        <h2>
          {selectedHero.name}
          {' '}
          detail
        </h2>
        <div>
          <span>
            id:
            {selectedHero.id}
          </span>

        </div>
        <div>
          <label htmlFor="hero-name">
            Hero name:
            <input id="hero-name" value={selectedHero.name} onChange={handleNameChange} placeholder="Hero name" />
          </label>
        </div>
        <button type="button">Go back</button>
        <button type="button">Save</button>
      </div>
    ) : (
      <h2>
        There is no hero with id=
        { heroId }
      </h2>
    )
  );
};

export default HeroDetail;
