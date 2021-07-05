import React from 'react-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPlanets } from '../../redux/Actions/actionCreator';

const Apitest = ({ dispatch, planets }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4', '?page=5', '?page=6'];
  useEffect(() => {
    pages.forEach((page) => dispatch(loadPlanets(page)));
  }, []);

  return (
    <div>
      {planets.length && planets?.map((planetsArray) => (
        <ul key={planetsArray.indexOf()}>
          {planetsArray.length && planetsArray?.map((planet) => (
            <>
              <li key={planet.name}>{planet.name}</li>
              <img
                src={planet.imgUrl}
                alt={planet.name}
                className="list-element__image"
              />
            </>
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

const mapStateToProps = (state) => ({
  planets: state.loadSwapiPlanets
});

export default connect(mapStateToProps)(Apitest);
