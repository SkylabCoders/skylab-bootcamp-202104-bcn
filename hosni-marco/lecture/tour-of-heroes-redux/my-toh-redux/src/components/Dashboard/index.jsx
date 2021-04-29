import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import HEROES from '../../constants/heroes.mock';
import { loadHeros } from '../../redux/actions/actionCreators';

// eslint-disable-next-line no-unused-vars
function Dashboard({ heroes, dispatch }) {
  useEffect(() => {
    dispatch(loadHeros());
  }, []);
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {HEROES.slice(1, 5).map((hero) => <Link to={`/Detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
    </>
  );
}

Dashboard.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}
export default connect(mapStateToProps)(Dashboard);
