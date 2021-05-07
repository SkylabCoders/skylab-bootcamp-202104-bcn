import React from 'react-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { loadStarships, setCurrentStarship, createTravel } from '../../redux/Actions/actionCreator';
import StarshipDetail from '../StarshipDetail';
import USERS from '../../redux/store/userList';

const ChooseStarship = ({ dispatch, starships, userState }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4'];
  const [currentStarship, setStarship] = useState({ cost_in_credits: 0 });
  const [currentPrice, setCurrentPrice] = useState(0);
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
    <div>
      <h1>{currentPrice}</h1>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleBack}
      >
        BACK
      </button>
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
