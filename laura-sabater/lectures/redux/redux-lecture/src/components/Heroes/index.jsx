/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './heroes.css';
import { deleteHero, loadHeroes, addHero } from '../../redux/actions/actionCreators';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function handleDeleteHero(heroId) {
    dispatch(deleteHero(heroId));
  }

  // function handleNameChange(event) {
  //   const heroName = event.target.value;
  //   return heroName;
  // }

  function add() {
    const newName = document.getElementById('hero-name').value;
    debugger;
    dispatch(addHero({ id: heroes[heroes.length - 1] + 1, name: newName }));
    debugger;
  }

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="hero-name">
          Hero name
          <input
            id="hero-name"
            // onChange={handleNameChange}
            placeholder="Hero name"
          />
          <button onClick={() => add} type="button">Add Hero</button>
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
