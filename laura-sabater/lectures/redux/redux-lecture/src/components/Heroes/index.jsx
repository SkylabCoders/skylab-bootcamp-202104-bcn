/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './heroes.css';
import { loadHeroes } from '../../redux/actions/actionCreators';

function HeroesList({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <div className="heroes-list">
      {heroes.map((hero) => (
        <Link to={`/detail/${hero.id}`}>
          {hero.id}
          {' '}
          {hero.name}
        </Link>
      ))}
    </div>
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
