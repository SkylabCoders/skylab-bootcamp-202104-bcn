import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroes from '../../constants/heroes.mock';
import './HeroDetail.css';

function Detail() {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();

  useEffect(() => {
    setSelectedHero(heroes.find((hero) => hero.id === +heroId));
  }, [heroId]);

  function handleNameChange(event) {
    setSelectedHero({
      ...selectedHero,
      name: event.target.value,
    });
  }
  return (
    selectedHero
      ? (
        <div>
          <h2>
            {selectedHero?.name}
            {' '}
            Details
          </h2>
          <div>
            <span>id: </span>
            {selectedHero?.id}
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero Name:
              <input id="hero-name" onChange={handleNameChange} value={selectedHero.name} placeholder="Hero Name" />
            </label>
          </div>
          <button type="button">Go Back</button>
          <button type="button">Save</button>
        </div>
      )
      : (
        <h3>No hero detected</h3>

      )
  );
}

export default Detail;
