import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HeroDetail.css';
import { getHeroById, updateHero } from '../../redux/actions/actionCreators';

function Detail({ selectedHero, dispatch }) {
  const { heroId } = useParams();
  const [heroName, setHeroName] = useState(selectedHero?.name);

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
    dispatch(updateHero({ id: selectedHero.id, name: heroName }));
  }
  return (
    selectedHero
      ? (
        <div>
          <h2>
            {selectedHero?.name}
            {' '}
            Details
          </h2>
          <div>
            <span>id: </span>
            {selectedHero?.id}
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero Name:
              <input id="hero-name" onChange={handleNameChange} value={selectedHero.name} placeholder="Hero Name" />
            </label>
          </div>
          <button type="button">Go Back</button>
          <button type="button" onClick={save}>Save</button>
        </div>
      )
      : (
        <h3>No hero detected</h3>

      )
  );
}

Detail.propTypes = {
  selectedHero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ selectedHero }) {
  return {
    hero: selectedHero,
  };
}

export default connect(mapStateToProps)(Detail);
