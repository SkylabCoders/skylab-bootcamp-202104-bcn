import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero } from '../../redux/actions/actionCreators';
import './heroList.css';

function HeroList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }

  return (
    <>
      <h2>Top Heroes</h2>
      <div>
        <label htmlFor="hero-input">
          Hero name:
          <input id="hero-input" placeholder="Hero name" />
        </label>
        <button type="button">
          Add
        </button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li className="heroes_li">
            <Link to={`/detail/${hero.id}`}>
              {hero.id}
              {' - '}
              {hero.name}
            </Link>
            <button type="button" className="delete" onClick={() => handleDelete(hero.id)} title="delete hero">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}
export default connect(mapStateToProps)(HeroList);
