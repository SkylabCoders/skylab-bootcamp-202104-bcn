import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './herodetail.css';
import heroes from '../../assets/heroes';

function HeroDetail() {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();
  useEffect(() => {
    setSelectedHero(heroes.find((hero) => hero.id === +heroId));
  }, [heroId]);
  function handleNameChange() {
    setSelectedHero({
      ...selectedHero,
      // eslint-disable-next-line no-restricted-globals
      name: event.target.value,
    });
  }

  return (
    selectedHero ? (
      <div>
        <h3>
          Hero Name:
          {' '}
          {selectedHero.name}
        </h3>
        <h4>
          Hero ID:
          {' '}
          {selectedHero.id}
        </h4>
        <label htmlFor="hero-name">
          Hero Name:
          <input
            id="hero-name"
            value={selectedHero.name}
            onChange={handleNameChange}
          />
        </label>
        <button type="button">Forward</button>
        <button type="button">Back</button>
      </div>
    ) : <h3>Hero not Found</h3>
  );
}

export default HeroDetail;
