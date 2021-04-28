import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './heroesList.css';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero } from '../../redux/actions/actionCreators';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.lenght) dispatch(loadHeroes());
  }, []);

  function handleDelete(heroId) {
    dispatch(deleteHero(heroId));
  }

  return (
    <>
      <h2>Top Heroes</h2>
      <ul className="heroes">

        {heroes.map((hero) => (
          <>
            <li className="heroes-li">
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
