import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './HeroList.css';
import { loadHeroes } from '../../redux/actions/actionCreators';

function HeroList({ heroes, dispatch }) {
  useEffect(() => {
    dispatch(loadHeroes());
  });
  return (
    <>
      <div>
        {heroes.map((hero) => <Link to={`/detail/${hero.id}`}>{hero.name}</Link>)}
        <button type="button">Delete</button>
      </div>
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
