import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteHero, loadHeroes } from '../../redux/actions/actionCreators';
import './heroeslist.css';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);
  function deleteClick(id) {
    dispatch(deleteHero(id));
  }
  return (
    <>
      <h2>Top Heroes</h2>
      <label htmlFor="hero-name">
        Add Hero:
        <input
          id="hero-name"
          placeholder="New Hero Name"
        />
        <button type="button">ADD</button>
      </label>
      <ul className="heroes-menu">
        {heroes.map((hero) => (
          <li className="heroes-menu__item">
            <Link to={`/detail/${hero.id}`}>{hero.name}</Link>
            {' '}
            <button type="button" className="cross-button" onClick={() => deleteClick(hero.id)}>X</button>
          </li>
        ))}
      </ul>
      <form>
        <h3>Hero Search</h3>
        <input type="text" />
      </form>
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
