import React, { useEffect, useState } from 'react';
import './heroeList.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero, addHero } from '../../redux/actions/actionCreators';

function List({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  const [newHeroName, setNewHero] = useState('');

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }
  function handleAdd() {
    const heroNew = { id: (heroes[heroes.length - 1].id + 1), name: newHeroName };
    dispatch(addHero(heroNew));
  }
  useEffect(() => {
    dispatch(loadHeroes());
  }, [heroes]);

  return (
    <>
      <div>
        <h2>My Heroes</h2>
        <p>Hero name:</p>
        <input
          type="text"
          id="heroInputCreation"
          value={newHeroName}
          onChange={(event) => setNewHero((event.target.value))}
        />
        <button type="button" onClick={() => handleAdd()}>Add</button>

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
