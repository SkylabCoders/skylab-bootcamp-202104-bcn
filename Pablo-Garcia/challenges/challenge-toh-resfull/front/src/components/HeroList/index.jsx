import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero } from '../../redux/actions/actionCreators';
import { createHero } from '../../services/hero';
import './heroList.css';

function HeroList({ heroes, dispatch }) {
  const [heroName, setHeroName] = useState('');
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }

  const onAddHero = () => {
    const heroNew = { name: heroName };
    dispatch(createHero(heroNew));
  };

  return (
    <>
      <h2>Top Heroes</h2>
      <div>
        <label htmlFor="hero-input">
          Hero name:
          <input id="hero-input" value={heroName} onChange={({ target }) => setHeroName(target.value)} placeholder="Hero name" />
        </label>
        <button type="button" onClick={onAddHero}>
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
