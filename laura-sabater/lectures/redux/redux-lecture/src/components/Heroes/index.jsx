/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './heroes.css';
import { deleteHero, loadHeroes } from '../../redux/actions/actionCreators';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function handleDeleteHero(heroId) {
    debugger;
    dispatch(deleteHero(heroId));
  }

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="hero-name">
          Hero name
          <input
            id="hero-name"
          // onChange={}
            placeholder="Hero name"
          />
          <button type="button">Add Hero</button>
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
