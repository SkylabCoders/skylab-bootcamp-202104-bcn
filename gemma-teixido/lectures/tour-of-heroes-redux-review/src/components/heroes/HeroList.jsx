import { React, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadHeroes } from '../redux/actions/actionCreator';

const HeroList = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) {
      dispatch(loadHeroes());
    }
  }, []);
  return (
    <main>
      <h2>Hero List</h2>
      <div className="heroes-menu">
        {
          heroes.length && heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)
        }
      </div>
    </main>
  );
};

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
