import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constans/heroes';
import './HeroDetail.css';

function HeroDetail() {
  const { heroId } = useParams();
  const [selectedHero, setSelectHero] = useState();
  useEffect(() => {
    setSelectHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  function handleNameChange(event) {
    setSelectHero(
      {
        ...selectedHero,
        name: event.target.value
      }
    );
  }

  return (
    selectedHero
      ? (
        <div>
          <h2>
            {selectedHero.name}
            {' '}
            details
          </h2>
          <div>
            <span>id: </span>
            {selectedHero.id}
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero name:
              <input
                id="hero-name"
                value={selectedHero.name}
                onChange={handleNameChange}
                placeholder="Hero name"
              />
            </label>
          </div>
          <div>
            <button type="button">go back</button>
            <button type="button">save</button>
          </div>
        </div>
      )
      : (
        <div>
          <h3>
            No hay heroe con la id=
            {heroId}
          </h3>
        </div>
      )
  );
}
export default HeroDetail;
