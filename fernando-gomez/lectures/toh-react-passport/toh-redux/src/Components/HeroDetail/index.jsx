import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import React, { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadHero, updateHero } from '../../redux/actions/actionCreator';
import './heroDetail.css';

const HeroDetail = ({ selectedHero, dispatch }) => {
  const { heroId } = useParams();
  const [heroName, setHeroName] = useState(selectedHero?.name);

  useEffect(() => {
    dispatch(loadHero(heroId));
  }, [heroId]);

  useEffect(() => {
    setHeroName(selectedHero?.name);
  }, [selectedHero]);

  const handleNameChange = (event) => {
    setHeroName(event.target.value);
  };

  const save = () => {
    dispatch(updateHero({ id: selectedHero.id, name: heroName }));
  };

  return (
    selectedHero.id
      ? (
        <>
          <h2>
            { heroName }
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
              value={heroName}
              onChange={handleNameChange}
            />
          </label>
          <button type="button">go back</button>
          <button onClick={save} type="button">save</button>
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

HeroDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedHero: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

const mapsStateToProps = ({ selectedHero }) => ({
  selectedHero,
});

export default connect(mapsStateToProps)(HeroDetail);
