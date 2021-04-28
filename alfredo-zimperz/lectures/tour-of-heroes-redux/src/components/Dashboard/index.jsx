import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroes } from '../../redux/actions/actionCreators';
import './dashboard.css';

const Dashboard = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map(({ id, name }) => (
          <Link to={`/heroes/${id}`} key={id}>
            {name}
          </Link>
        ))}

      </div>
    </>
  );
};

Dashboard.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes,
  };
}

export default connect(mapStateToProps)(Dashboard);
