/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHero, updateHero } from '../../redux/actions/actionCreators';
import './heroDetail.css';

function HeroDetail({ selectedHero, dispatch }) {
  const { heroId } = useParams();
  const [heroName, setHeroName] = useState(selectedHero?.name);

  useEffect(() => {
    dispatch(loadHero(heroId));
  }, [heroId]);

  useEffect(() => {
    setHeroName(selectedHero?.name);
  }, [selectedHero]);

  function handleNameChange(event) {
    setHeroName(event.target.value);
  }

  function save() {
    dispatch(updateHero({ _id: selectedHero._id, id: selectedHero.id, name: heroName }));
  }

  return (
    selectedHero.id
      ? (
        <div>
          <h2>
            {heroName}
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
                value={heroName}
                onChange={handleNameChange}
                placeholder="Hero name"
              />
            </label>
          </div>
          <Link to="/heroes">go back</Link>
          <button onClick={save} type="button">save</button>
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

HeroDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedHero: PropTypes.shape({
    _id: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ selectedHero }) {
  return {
    selectedHero,
  };
}

export default connect(mapStateToProps)(HeroDetail);
