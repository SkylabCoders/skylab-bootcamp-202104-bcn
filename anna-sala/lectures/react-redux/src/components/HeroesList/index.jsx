import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteHero, loadHeroes, addHero } from '../../redux/actions/actionCreators';
import './heroeslist.css';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);
  function deleteClick(id) {
    dispatch(deleteHero(id));
  }
  function clickAdd() {
    const newHero = document.getElementById('new-hero-name');
    dispatch(addHero({ id: heroes[heroes.length - 1] + 1, name: newHero.value }));
  }
  return (
    <>
      <h2>Top Heroes</h2>
      <label htmlFor="hero-name">
        Add Hero:
        <input
          id="new-hero-name"
          placeholder="New Hero Name"
        />
        <button type="button" onClick={() => clickAdd()}>ADD</button>
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
