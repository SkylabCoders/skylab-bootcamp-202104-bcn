import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPlanets, addUser } from '../../redux/Actions/actionCreator';

function PlanetDetail({ planet, dispatch }) {
  const { faction } = useParams();
  const [currentPlanet, setCurrentPlanet] = useState({ name: 'none', imUrl: 'https://i.pinimg.com/474x/69/9a/5b/699a5bdbf5511dfeddeab7dd39862237.jpg' });
  const { user } = useAuth0();

  const handlePlanetSelection = (url) => {
    setCurrentPlanet(url);
  };

  const handleSubmit = () => {
    const newUser = {
      email: user.email,
      username: user.username,
      faction,
      avatar: user.avatar,
      wishlist: [{
        id: 0,
        planet: currentPlanet,
        starship: 'Death Star',
        price: 0
      }]
    };
  };

  dispatch(addUser(newUser));

  useEffect(() => {
    if (!planet.lenght) dispatch(loadPlanets());
  }, []);

  return (
    <section className="choose-planet">
      <div className="choose-planet__header header">
        <h1>Choose your Planet</h1>
        <img
          className="header_img"
          src={user.avatar}
          alt={user.username}
        />
      </div>

    </section>
  );
}

PlanetDetail.propTypes = {
  planet: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ userActionReducer, authReducer }) {
  return {
    planet: userActionReducer,
    auth: authReducer
  };
}

export default connect(mapStateToProps)(PlanetDetail);
