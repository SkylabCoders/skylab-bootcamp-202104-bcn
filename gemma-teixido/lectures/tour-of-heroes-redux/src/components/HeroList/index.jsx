import React, { useEffect } from 'react';
import './heroeList.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes } from '../../redux/actions/actionCreators';

function List({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <>
      <div>
        <h2>My Heroes</h2>
        <p>Hero name:</p>
        <input />
        <button type="button" className="add-button"> Add hero </button>
      </div>
      <ul className="heroes-list">
        {heroes.map((hero) => (
          <Link to={`/detail/${hero.id}`}>
            <li>
              {hero.id}
              {' '}
              {hero.name}
            </li>
          </Link>
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
