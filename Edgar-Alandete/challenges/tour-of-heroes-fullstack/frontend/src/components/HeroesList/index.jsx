import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadHeroes, deleteHero, addHero } from '../../redux/actions/actionCreators';
import './HeroesList.css';

function HeroesList({ heroes, dispatch }) {
  const [heroName, setHeroName] = useState();

  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }

  function getName(event) {
    setHeroName(event.target.value);
  }

  function handleCreate() {
    dispatch(addHero({ name: heroName }));
  }

  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" onChange={getName} />
        </label>
        <button type="button" className="add-button" onClick={() => handleCreate()}>
          Add Hero
        </button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to={`/detail/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {' '}
              {hero.name}
            </Link>
            <button type="button" className="delete" onClick={() => handleDelete(hero.id)} title="delete hero">x</button>
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
