import React from 'react-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadStarships, setCurrentStarship } from '../../redux/Actions/actionCreator';
import StarshipDetail from '../StarshipDetail';

const Apitest = ({ dispatch, starships }) => {
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

Apitest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  starships: PropTypes.shape([]).isRequired
};

const mapStateToProps = ({ loadSwapiStarships }) => ({
  starships: loadSwapiStarships
});

export default connect(mapStateToProps)(Apitest);
