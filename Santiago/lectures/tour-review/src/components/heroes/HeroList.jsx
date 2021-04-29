import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadHeroes from '../../redux/actions/actionCreator';

const HeroList = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <main>
      <h2>HERO LIST</h2>
      <div>
        {
            heroes.map((hero) => (
              <li key={hero.id}>{hero.name}</li>
            ))
        }
      </div>
    </main>
  );
};

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

// Conectar store con el componente
function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}
export default connect(mapStateToProps)(HeroList);
