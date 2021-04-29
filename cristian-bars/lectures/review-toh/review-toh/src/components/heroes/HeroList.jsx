import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadHeroes } from '../../redux/actions/action-creator';

const HeroList = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) {
      dispatch(loadHeroes());
    }
  }, []);

  return (
    <main>
      <h2> Top Heroes</h2>
      <div className="heroes-menu">
        Llista
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
