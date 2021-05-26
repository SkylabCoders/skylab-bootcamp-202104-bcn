/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import HeroSearch from '../HeroSearch';
import { loadHeroes } from '../../redux/actions/actionCreator';
import './form.css';

const Dashboard = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);
  return (
    <>
      <h2>Top heroes</h2>
      <HeroSearch />
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <Link to={`/detail/${hero._id}`}>{hero.name}</Link>)}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  heroes: store.heroes,
});

export default connect(mapStateToProps)(Dashboard);
