import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './herodetail.css';
import HEROES from '../../constants/heroes.mock';

function HeroDetail() {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();
  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  function handleNameChange(event) {
    setSelectedHero({
      ...selectedHero,
      name: event.target.value,
    });
  }

  return (
    selectedHero ? (
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
            Hero name:
            <input id="hero-name" value={selectedHero.name} onChange={handleNameChange} placeholder="Hero name" />
          </label>
        </div>
        <button type="button">go back</button>
        <button type="button">save</button>
      </div>
    )
      : (
        <h3>No hay heroe</h3>
      )

  );
}

export default HeroDetail;
