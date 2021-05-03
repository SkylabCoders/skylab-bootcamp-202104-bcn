import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createHero } from '../../redux/actions/actionCreator';

function CreateHeroes({ hero, dispatch }) {
  // eslint-disable-next-line no-unused-vars
  const [heroName, setHeroName] = useState();

  function handleNameChange(event) {
    setHeroName(event.target.value);
  }

  useEffect(() => {
    setHeroName(hero?.heroName);
  }, [hero]);

  function dispatchCreateHero() {
    dispatch(createHero(hero));
  }

  return (
    <>
      <h2>Create New Hero</h2>
      <label htmlFor="hero-name">
        Hero name:
        <input
          id="hero-name"
          onChange={handleNameChange}
          placehodler="Hero name"
        />
      </label>
      <button type="button" onClick={dispatchCreateHero}>Create Hero</button>
    </>
  );
}

CreateHeroes.propTypes = {
  hero: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ hero }) {
  return {
    hero,
  };
}

export default connect(mapStateToProps)(CreateHeroes);
