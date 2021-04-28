import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadHeroes } from '../../redux/actions/actionCreators';
import './dashboard.css';

const Dashboard = ({ heroes, dispatch }) => {
  useEffect(() => {
    dispatch(loadHeroes());
  }, []);
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <Link to={`/detail/${hero.id}`}>{hero.name}</Link>)}
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
