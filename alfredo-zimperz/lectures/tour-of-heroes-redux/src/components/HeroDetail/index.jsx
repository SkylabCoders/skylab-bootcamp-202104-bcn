import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './heroDetail.css';

const HeroDetail = () => {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();

  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  const handleNameChange = (event) => {
    console.log(event);
    setSelectedHero(
      { ...selectedHero, name: event.target.name },
    );
  };

  return (
    selectedHero ? (
      <section className="hero">
        <h2>
          {selectedHero?.name.toUpperCase()}
          {' '}
          Details
        </h2>
        <div>
          <span>id: </span>
          {selectedHero?.id}
        </div>
        <div>
          <label htmlFor="hero-name">
            Hero name:
            <input
              id="hero-name"
              placeholder="Hero name"
              value={selectedHero?.name}
              onChange={handleNameChange}
            />
          </label>

        </div>
        <button type="button">go back</button>
        <button type="button">save</button>
      </section>
    ) : (
      <h2>
        There is no hero with id
        {' '}
        {heroId}
      </h2>
    )

  );
};

export default HeroDetail;
