import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './heroDetails.css';
import HEROES from '../Constants/heroes-mock';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function HeroDetails() {
  const { heroId } = useParams();
  const [hero, setSelectedHero] = useState(selectedHero);

  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, { heroId });

  function handleNameChange(event) {
    setSelectedHero({
      ...selectedHero,
      name: event.target.value
    });
  }

  return (
    selectedHero
      ? (
        <div>
          <h2>
            {selectedHero.name}
            {'  '}
            Details
          </h2>
          <div>
            <span>
              ID:
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
      )
      : (
        <h1>
          No heroe with id
          {' '}
          {heroId}
        </h1>
      )
  );
}
HeroDetail.propTypes

funtion mapStateToProps({selectedHero}){
  return {
    hero:selectedHero
  }
}
export default connect(mapStateToProps)(HeroDetails);
