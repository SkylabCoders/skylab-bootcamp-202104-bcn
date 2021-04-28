import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadHeroes } from '../../redux/actions/actionCreators';
import './HeroesList.css';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);
  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" />
        </label>
        <button type="button" className="add-button">
          Add Hero
        </button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to="/detail/id">
              <span className="badge">{hero.id}</span>
              {' '}
              {hero.name}
            </Link>
            <button type="button" className="delete" title="delete hero">x</button>
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
