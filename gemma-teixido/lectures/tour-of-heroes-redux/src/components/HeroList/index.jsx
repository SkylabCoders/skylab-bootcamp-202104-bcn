import React, { useEffect } from 'react';
import './heroeList.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero, addHero } from '../../redux/actions/actionCreators';

function List({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }

  function handleAdd(hero) {
    dispatch(addHero(hero));
  }

  return (
    <>
      <div>
        <h2>My Heroes</h2>
        <p>Hero name:</p>
        <input />
        {heroes.map((hero) => (
          <button type="button" className="add-button" onClick={() => handleAdd(hero)} title="delete hero"> Add hero</button>
        ))}

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

List.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(List);
