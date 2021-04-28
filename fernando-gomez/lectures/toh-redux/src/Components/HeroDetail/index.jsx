import { useState, useEffect } from 'react';
import React, { useParams } from 'react-router-dom';
import HEROES from '../../heroes.mock';
import './heroDetail.css';

const HeroDetail = () => {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();

  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  const handleNameChange = (event) => {
    setSelectedHero({
      ...selectedHero,
      name: event.target.value,
    });
  };

  return (
    selectedHero
      ? (
        <>
          <h2>
            { selectedHero?.name }
            {' '}
            Details
          </h2>
          <div>
            <span>id: </span>
            { selectedHero?.id }
          </div>
          <label htmlFor="hero-name">
            Hero name:
            <input
              id="hero-name"
              placeholder="Hero name"
              value={selectedHero?.name}
              onChange={handleNameChange}
            />
          </label>
          <button type="button">go back</button>
          <button type="button">save</button>
        </>
      )
      : (
        <h3>
          There is no hero with id
          {' '}
          {heroId}
        </h3>
      )
  );
};
export default HeroDetail;
