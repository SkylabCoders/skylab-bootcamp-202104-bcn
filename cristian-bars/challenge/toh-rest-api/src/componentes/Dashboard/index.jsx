import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dashboard.css';
import { PropTypes } from 'prop-types';
import { loadHeroes, deleteHero } from '../../redux/actions/actionCreators';

function Dashboard({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  function deleteHeroById(hero) {
    dispatch(deleteHero(hero));
  }

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.map((hero) => (
          <div>
            <Link to={`/detail/${hero.id}`} key={hero.id}>{hero.name}</Link>
            <button onClick={() => deleteHeroById(hero)} type="button">Delete</button>
          </div>
        ))}
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
