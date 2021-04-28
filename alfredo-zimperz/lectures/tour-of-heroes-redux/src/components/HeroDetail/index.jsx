import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getHeroById, updateHero } from '../../redux/actions/actionCreators';
import './heroDetail.css';

const HeroDetail = ({ selectedHero, dispatch }) => {
  const { heroId } = useParams();
  const [heroName, setHeroName] = useState(selectedHero?.name);

  useEffect(() => {
    dispatch(getHeroById(heroId));
  }, [heroId]);

  useEffect(() => {
    setHeroName(selectedHero.name);
  }, [selectedHero]);

  const handleNameChange = (event) => {
    setHeroName(event.target.value);
  };

  const save = () => {
    dispatch(updateHero({ id: selectedHero.id, name: heroName }));
  };

  return (
    selectedHero?.id ? (
      <section className="hero">
        <h2>
          {heroName?.toUpperCase()}
          {' '}
          Details
        </h2>
        <div>
          <span>id: </span>
          {selectedHero?.id}
        </div>
        <div>
          <label htmlFor="hero-name">
            Hero name:
            <input
              id="hero-name"
              placeholder="Hero name"
              value={heroName}
              onChange={handleNameChange}
            />
          </label>

        </div>
        <button type="button">go back</button>
        <button type="button" onClick={save}>save</button>
      </section>
    ) : (
      <h2>
        There is no hero with id
        {' '}
        {heroId}
      </h2>
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

function mapStateToProps({ selectedHero }) {
  return { selectedHero };
}

export default connect(mapStateToProps)(HeroDetail);
