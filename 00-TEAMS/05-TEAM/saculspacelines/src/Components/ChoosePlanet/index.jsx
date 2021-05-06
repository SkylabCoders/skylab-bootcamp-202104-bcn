import React from 'react-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPlanets, setCurrentPlanet } from '../../redux/Actions/actionCreator';
import PlanetDetail from '../PlanetDetail';

const Apitest = ({ dispatch, planets }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4', '?page=5', '?page=6'];
  const [currentPlanet, setPlanet] = useState(null);

  useEffect(() => {
    pages.forEach((page) => dispatch(loadPlanets(page)));
  }, []);

  const handlePlanetSelection = (planet) => {
    setPlanet(planet);
    dispatch(setCurrentPlanet(currentPlanet));
  };

  return (
    <div>
      {planets.length && planets?.map((planetsArray) => (
        <ul key={planetsArray.indexOf()}>
          {planetsArray.length && planetsArray?.map((planet) => (
            <PlanetDetail
              data={planet}
              clickHandler={() => handlePlanetSelection(planet)}
            />
          ))}
        </ul>
      )) }
    </div>
  );
};

Apitest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  planets: PropTypes.shape([]).isRequired
};

const mapStateToProps = ({ loadSwapiPlanets }) => ({
  planets: loadSwapiPlanets
});

export default connect(mapStateToProps)(Apitest);
