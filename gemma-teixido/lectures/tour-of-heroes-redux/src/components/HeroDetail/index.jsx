import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import HEROES from '../constants/heroe.mock';
import './HeroDetail.css';

function HeroDetail() {
  const { heroId } = useParams();
  // const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  const [selectedHero, setSelectedHero] = useState();
  // recibe un callback que se va a utilizar dependiendo del segundo parametro.
  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);

  function handleNameOnChange(event) {
    setSelectedHero({
      ...selectedHero, name: event.target.value
    });
  }

  return (
    selectedHero
      ? (
        <>
          <div>
            <h2>
              {selectedHero?.name}
              {' '}
              Details
            </h2>
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero name:
              <input id="hero-name" value={selectedHero.name} onChange={handleNameOnChange} placeholder="Hero Name" />
            </label>
            <button type="button">Go Back</button>
            <button type="button">Save</button>
          </div>
        </>
      ) : (
        <h3>
          There is no hero with id=
          {heroId}
        </h3>
      ));
}

export default HeroDetail;
