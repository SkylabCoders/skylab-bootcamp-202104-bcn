/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes } from '../../redux/actions/actionCreators';
import './dashboard.css';

function Dashboard({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <>
      <h2>Top heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <Link to={`/detail/${hero._id}`}>{hero.name}</Link>)}
      </div>
      <div>
        <label htmlFor="hero-search">
          <input
            type="text"
            placeholder="Search hero"
            id="newHero"
            // value={heroName}
            // onChange={(event) => setHeroName(event.target.value)}
          />
          <button
            type="button"
            // onClick={() => dispatch(addHero({ name: heroName }))}
          >
            Search
          </button>
        </label>
      </div>
    </>
  );
}

Dashboard.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes,
  };
}

export default connect(mapStateToProps)(Dashboard);
