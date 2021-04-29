import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadHeroes from '../../redux/actions/actionCreator';

const Dashboard = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  return (
    <main>
      <h2>DASHBOARD</h2>
      <h3>Top Heroes</h3>
      <div>
        {
            heroes.slice(0, 5).map((hero) => (
              <li key={hero.id}>{hero.name}</li>
            ))
        }
      </div>
    </main>
  );
};

Dashboard.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

// Conectar store con el componente
function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(Dashboard);
