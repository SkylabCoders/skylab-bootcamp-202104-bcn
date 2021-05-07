import React from 'react-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadStarships, setCurrentStarship, createTravel } from '../../redux/Actions/actionCreator';
import StarshipDetail from '../StarshipDetail';

const ChooseStarship = ({ dispatch, starships, userState }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4'];
  const [currentStarship, setStarship] = useState(null);
  const history = useHistory();

  useEffect(() => {
    pages.forEach((page) => dispatch(loadStarships(page)));
  }, []);

  const handleStarshipSelection = (starship) => {
    setStarship(starship);
  };

  const handleSubmit = () => {
    dispatch(setCurrentStarship(currentStarship));
    dispatch(createTravel(
      {
        planet: userState.currentPlanet,
        starship: currentStarship,
        price: '5$'
      }
    ));
    history.push('/select-destiny');
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
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
    currentPlanet: PropTypes.shape({}).isRequired,
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
