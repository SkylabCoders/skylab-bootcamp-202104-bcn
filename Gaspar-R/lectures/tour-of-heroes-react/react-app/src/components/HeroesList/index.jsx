import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './heroesList.css';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero, addHero } from '../../redux/actions/actionCreators';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.lenght) dispatch(loadHeroes());
  }, []);

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }

  // useEffect(() => {
  //   setHeroName(hero?.hernoName);
  // }, [hero]);

  function handleAddHero() {
    const newHero = document.getElementById('add-hero');
    const lastId = heroes.length;
    return dispatch(addHero({ id: lastId + 11, name: newHero.value }));
  }

  return (
    <>
      <h2>List of Heroes</h2>

      <form>
        <label htmlFor="add-hero">
          Add new hero:
          <input
            id="add-hero"
            placeholder="Hero name"
          />
        </label>
        <button
          type="button"
          onClick={() => handleAddHero()}
        >
          Add
        </button>
      </form>

      <ul className="heroes">

        {heroes.map((hero) => (
          <>
            <li className="heroes-li" key={`${hero.id}`}>
              <Link to={`/detail/${hero.id}`}>
                {hero.id}
                {' '}
                {hero.name}
              </Link>
              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(hero.id)}
              >
                {' '}
                x
                {' '}

              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

HeroesList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(HeroesList);
