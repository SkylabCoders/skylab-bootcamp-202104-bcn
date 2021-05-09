import React from 'react-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { loadStarships, setCurrentStarship, createTravel } from '../../redux/Actions/actionCreator';
import StarshipDetail from '../StarshipDetail';
import USERS from '../../redux/store/userList';
import './form.css';

const ChooseStarship = ({ dispatch, starships, userState }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4'];
  const [currentStarship, setStarship] = useState({
    MGLT: 'unknown',
    cargo_capacity: 'unknown',
    consumables: 'unknown',
    cost_in_credits: 'unknown',
    created: '2014-12-20T19:55:15.396000Z',
    crew: '3',
    edited: '2014-12-20T21:23:49.948000Z',
    faction: 'NEUTRAL',
    films: ['http://swapi.dev/api/films/6/'],
    hyperdrive_rating: '0.5',
    imgUrl: 'https://forum.rebelscum.com/legacy/photogallery/data/500/medium/IMG_1049-cropped.jpg',
    length: '29.2',
    manufacturer: 'Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated',
    max_atmosphering_speed: '1050',
    model: 'J-type star skiff',
    name: 'Naboo star skiff',
    passengers: '3',
    pilots: ['http://swapi.dev/api/people/10/', 'http://swapi.dev/api/people/35/'],
    starship_class: 'yacht',
    url: 'http://swapi.dev/api/starships/64/'
  });

  const [currentPrice, setCurrentPrice] = useState();
  const history = useHistory();
  const {
    user
  } = useAuth0();

  const currentUser = USERS.find((userElement) => userElement.email === user.email);

  const calculatePrice = () => {
    let travelPrice = 0;
    let starshipPrice = currentStarship.cost_in_credits;
    const planetFaction = userState.currentPlanet.faction;
    const userFaction = currentUser.faction;

    if (starshipPrice === 'unknown') {
      starshipPrice = 150000;
    }
    if (planetFaction.toLowerCase() === userFaction.toLocaleLowerCase()) {
      travelPrice = starshipPrice / 2000;
    } else if (planetFaction.toLowerCase() === 'neutral') {
      travelPrice = starshipPrice / 1000;
    } else {
      travelPrice = starshipPrice / 200;
    }

    return travelPrice;
  };

  useEffect(() => {
    pages.forEach((page) => dispatch(loadStarships(page)));
  }, []);

  useEffect(() => {
    setCurrentPrice(calculatePrice());
  }, [currentStarship]);

  const handleStarshipSelection = (starship) => {
    setStarship(starship);
  };

  const handleSubmit = () => {
    dispatch(setCurrentStarship(currentStarship));
    dispatch(createTravel(
      {
        planet: userState.currentPlanet,
        starship: currentStarship,
        price: currentPrice
      }
    ));
    history.push('/select-destiny');
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="choose-starship">
      <nav className="starship-top-nav">
        <h1 className="starship-top-nav__title">Choose a starhsip</h1>
        <ul className="starship-top-nav__info top-buttons">
          <h2 className="top-buttons__price">
            {currentPrice}
            <p className="price-symbol">$</p>
          </h2>
          <img
            className="top-buttons__image"
            src={currentStarship.imgUrl}
            alt={currentStarship.name}
          />
        </ul>
      </nav>
      <section className="all-starships">
        {starships.length && starships?.map((starshipsArray) => (
          <ul key={starshipsArray.indexOf()}>
            {starshipsArray.length && starshipsArray?.map((starship) => (
              <StarshipDetail
                data={starship}
                clickHandler={() => handleStarshipSelection(starship)}
              />
            ))}
          </ul>

        )) }
      </section>
      <nav className="starships-buttons">
        <button
          type="button"
          onClick={handleBack}
          className="starships-buttons__back"
        >
          back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="starships-buttons__submit"
        >
          submit
        </button>
      </nav>
    </div>
  );
};

ChooseStarship.propTypes = {
  dispatch: PropTypes.func.isRequired,
  starships: PropTypes.shape([]).isRequired,
  userState: PropTypes.shape({
    currentPlanet: PropTypes.shape({
      faction: PropTypes.string.isRequired
    }).isRequired,
    currentStarship: PropTypes.shape({}).isRequired
  }).isRequired
};

// const mapStateToProps = ({ loadSwapiStarships, userActionReducer }) => ({
//   starships: loadSwapiStarships,
//   planet: userActionReducer.currentPlanet
// });

function mapStateToProps({ loadSwapiStarships, userActionReducer }) {
  return {
    starships: loadSwapiStarships,
    userState: userActionReducer
  };
}

export default connect(mapStateToProps)(ChooseStarship);
