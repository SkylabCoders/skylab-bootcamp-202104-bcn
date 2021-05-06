import React from 'react-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { loadPlanets, setCurrentPlanet } from '../../redux/Actions/actionCreator';
import PlanetDetail from '../PlanetDetail';

const ChoosePlanet = ({ dispatch, planets }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4', '?page=5', '?page=6'];
  const [currentPlanet, setPlanet] = useState(null);
  const history = useHistory();

  const { logout } = useAuth0();

  useEffect(() => {
    pages.forEach((page) => dispatch(loadPlanets(page)));
  }, []);

  const handlePlanetSelection = (planet) => {
    setPlanet(planet);
  };

  const handleSubmit = () => {
    dispatch(setCurrentPlanet(currentPlanet));
    history.push('/select-starship');
  };

  const handleProfile = () => {
    history.push('/profile');
  };

  return (
    <div>
      <button className="logout-button" type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleProfile}
      >
        Profile
      </button>
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

ChoosePlanet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  planets: PropTypes.shape([]).isRequired
};

const mapStateToProps = ({ loadSwapiPlanets }) => ({
  planets: loadSwapiPlanets
});

export default connect(mapStateToProps)(ChoosePlanet);
