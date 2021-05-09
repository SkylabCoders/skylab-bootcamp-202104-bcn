import React from 'react-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { loadPlanets, setCurrentPlanet } from '../../redux/Actions/actionCreator';
import PlanetDetail from '../PlanetDetail';
import './form.css';
import USERS from '../../redux/store/userList';

const ChoosePlanet = ({ dispatch, planets }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4', '?page=5', '?page=6'];
  const [currentPlanet, setPlanet] = useState({
    climate: 'arid',
    created: '2014-12-09T13:50:49.641000Z',
    diameter: '10465',
    edited: '2014-12-20T20:58:18.411000Z',
    faction: 'NEUTRAL',
    films: ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/4/', 'http://swapi.dev/api/films/5/', 'http://swapi.dev/api/films/6/'],
    gravity: '1 standard',
    imgUrl: 'https://i.pinimg.com/474x/69/9a/5b/699a5bdbf5511dfeddeab7dd39862237.jpg',
    name: 'Tatooine',
    orbital_period: '304',
    population: '200000',
    residents: ['http://swapi.dev/api/people/1/', 'http://swapi.dev/api/people/2/', 'http://swapi.dev/api/people/4/', 'http://swapi.dev/api/people/6/', 'http://swapi.dev/api/people/7/', 'http://swapi.dev/api/people/8/', 'http://swapi.dev/api/people/9/', 'http://swapi.dev/api/people/11/', 'http://swapi.dev/api/people/43/', 'http://swapi.dev/api/people/62/'],
    rotation_period: '23',
    surface_water: '1',
    terrain: 'desert',
    url: 'http://swapi.dev/api/planets/1/'
  });
  const history = useHistory();
  const {
    user
  } = useAuth0();

  const currentUser = USERS.find((userElement) => userElement.email === user.email);

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
    <div className="choose-planet">
      <nav className="planet-top-nav">
        <h1 className="planet-top-nav__title">Choose a planet</h1>
        <ul className="planet-top-nav__buttons top-buttons">
          <img
            className="top-buttons__image"
            src={currentPlanet.imgUrl}
            alt={currentPlanet.name}
          />
          <button
            className="top-buttons__button"
            type="button"
            onClick={handleProfile}
          >
            <img
              className="top-buttons__profile"
              src={currentUser.avatar}
              alt={currentUser.name}
            />
          </button>
        </ul>
      </nav>
      <section className="all-planets">
        {planets.length && planets?.map((planetsArray) => (
          <ul key={planetsArray.indexOf()} className="planets-listing">
            {planetsArray.length && planetsArray?.map((planet) => (
              <PlanetDetail
                data={planet}
                clickHandler={handlePlanetSelection}
              />
            ))}
          </ul>
        )) }
      </section>
      <nav className="planet-buttons">
        <button className="planet-buttons__logout" type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        <button
          className="planet-buttons__submit"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </nav>
    </div>
  );
};

ChoosePlanet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  planets: PropTypes.shape([]).isRequired
};

const mapStateToProps = ({ loadSwapiPlanets, userActionReducer }) => ({
  planets: loadSwapiPlanets,
  userState: userActionReducer
});

export default connect(mapStateToProps)(ChoosePlanet);
