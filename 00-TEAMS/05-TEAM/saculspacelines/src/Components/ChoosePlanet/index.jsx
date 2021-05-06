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

  // const { faction } = useParams();
  // const [currentPlanet, setCurrentPlanet] = useState({ name: 'none', imUrl: 'https://i.pinimg.com/474x/69/9a/5b/699a5bdbf5511dfeddeab7dd39862237.jpg' });
  // const { user } = useAuth0();
  // const handleSubmit = () => {
  //   const newUser = {
  //     email: user.email,
  //     username: user.username,
  //     faction,
  //     avatar: user.avatar,
  //     wishlist: [{
  //       id: 0,
  //       planet: currentPlanet,
  //       starship: 'Death Star',
  //       price: 0
  //     }]
  //   };
  // };

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
              name={planet.name}
              rotationPeriod={planet.rotation_period}
              orbitalPeriod={planet.orbital_period}
              diameter={planet.diameter}
              climate={planet.climate}
              gravity={planet.gravity}
              terrain={planet.terrain}
              surfaceWater={planet.surface_water}
              population={planet.population}
              faction={planet.faction}
              imgUrl={planet.imgUrl}
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
