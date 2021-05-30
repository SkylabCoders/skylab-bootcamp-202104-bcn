/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteHero, loadHeroes, addHero } from '../../redux/actions/actionCreators';
import './Heroes.css';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, [heroes]);

  function handleDeleteHero(heroId) {
    dispatch(deleteHero(heroId));
  }

  function handleAddHero() {
    const newName = document.getElementById('hero-name').value;
    const heroesIndex = heroes.map((hero) => hero.id);
    const maxIndex = Math.max(...heroesIndex);
    const newId = maxIndex + 1;
    const newHero = { id: newId, name: newName };
    dispatch(addHero(newHero));
  }

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="hero-name">
          Hero name
          <input
            id="hero-name"
            placeholder="Hero name"
          />
          <button onClick={() => handleAddHero()} type="button">Add Hero</button>
        </label>
      </div>
      <ul className="heroes-list">
        {heroes.map((hero) => (
          <li>
            <Link className="heroes" to={`/detail/${hero.id}`}>
              <span>{hero.id}</span>
              {hero.name}
            </Link>
            <button type="button" className="button-delete" onClick={() => handleDeleteHero(hero.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

HeroesList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes,
  };
}

export default connect(mapStateToProps)(HeroesList);
