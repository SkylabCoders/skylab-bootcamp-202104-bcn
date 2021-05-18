/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getHeroById, updateHero } from '../../redux/actions/actionCreators';
import './HeroDetail.css';

function HeroDetail({ selectedHero, dispatch }) {
  const { heroId } = useParams();
  const [heroName, setHeroName] = useState(selectedHero?.name);
  const history = useHistory();

  useEffect(() => {
    dispatch(getHeroById(heroId));
  }, [heroId]);

  useEffect(() => {
    setHeroName(selectedHero?.name);
  }, [selectedHero]);

  function handleNameChange(event) {
    setHeroName(event.target.value);
  }

  function save() {
    dispatch(updateHero({ _id: selectedHero._id, name: heroName }));
  }

  return (
    selectedHero._id
      ? (
        <div>
          <h2>
            {heroName}
            {' '}
            Details
          </h2>
          <div>
            <span>id: </span>
            {selectedHero._id}
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
          <button type="button" onClick={() => history.goBack()}>
            Go Back
          </button>
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
    _id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ selectedHero }) {
  return {
    selectedHero,
  };
}

export default connect(mapStateToProps)(HeroDetail);
