import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createHero } from '../../redux/actions/actionCreator';

const CreateHero = ({ hero, dispatch }) => {
  const [heroName, setHeroName] = useState();

  const handleNameChange = (event) => {
    setHeroName(event.target.value);
  };

  useEffect(() => {
    setHeroName(hero?.heroName);
  }, [hero]);

  const saveHero = () => {
    dispatch(createHero(hero));
  };

  return (
    <>
      <h2>Create New Hero</h2>
      <label htmlFor="hero-name">
        Hero name:
        <input id="hero-name" onChange={handleNameChange} placeholder="Hero name" />
      </label>
      <button type="button" onClick={saveHero}>Create Hero</button>
    </>
  );
};

CreateHero.propTypes = {
  hero: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hero }) => ({
  heroe,
});

export default connect(mapStateToProps)(CreateHero);
