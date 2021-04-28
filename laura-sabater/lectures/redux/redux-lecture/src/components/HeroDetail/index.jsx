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
          <div>
            <h2>
              {selectedHero.name}
              {' '}
              details
            </h2>
          </div>
          <div>
            <span>id: </span>
            {selectedHero.id}
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero name:
              <input
                id="hero-name"
                value={selectedHero?.value}
                onChange={handleNameChange}
                placeholder="Hero name"
              />
            </label>
          </div>
          <button type="button">go back</button>
          <button type="button">save</button>
        </div>

      )
      : (
        <h3>
          There is no hero with id=
          {heroId}
        </h3>
      )

  );
}

export default connect(mapStateToProps)(HeroDetail);
