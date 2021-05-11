import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './dashboard.css';
import { PropTypes } from 'prop-types';
import { addHero, loadHeroes } from '../../redux/actions/actionCreators';

function Dashboard({ heroes, dispatch }) {
  const [heroName, setHeroName] = useState();
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <Link key={hero.id} to={`/detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
      <div>
        <label htmlFor="newHero">
          <input
            type="text"
            placeholder="Add hero"
            id="newHero"
            value={heroName}
            onChange={(event) => setHeroName(event.target.value)}
          />
          <button
            type="button"
            onClick={() => dispatch(addHero({ name: heroName }))}
          >
            Add
          </button>
        </label>
      </div>
    </>
  );
}

Dashboard.propTypes = {
  heroes: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(Dashboard);
