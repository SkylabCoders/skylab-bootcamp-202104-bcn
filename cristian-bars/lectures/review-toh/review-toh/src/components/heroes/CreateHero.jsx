import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createHero } from '../../redux/actions/action-creator';

const CreateHero = ({ hero, dispatch }) => {
  const [heroName, setHeroName] = useState();

  function handleNameChange(event) {
    setHeroName(event.target.values);
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
      Hero name:
      <label htmlFor="hero-name">
        <input type="text" id="hero-name" onChange={handleNameChange} placeholder="Hero name" />
      </label>
      <button type="button" onClick={dispatchCreateHero}>Create Hero</button>
    </>
  );
};

createHero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ hero }) {
  return (
    hero
  );
}

export default connect(mapStateToProps)(CreateHero);
