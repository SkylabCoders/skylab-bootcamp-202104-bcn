import React from 'react-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPlanets } from '../../redux/Actions/actionCreator';

const Apitest = ({ dispatch, planets }) => {
  const pages = ['?page=1', '?page=2', '?page=3', '?page=4', '?page=5', '?page=6'];
  useEffect(() => {
    console.log(planets);
    pages.forEach((page) => dispatch(loadPlanets(page)));
    console.log(planets);
  }, []);

  return (
    <>
      <ul>
        {planets.length && planets[0]?.map((person) => (
          <>
            <li>{person.name}</li>
            <img
              src={person.imgUrl}
              alt={person.name}
              className="list-element__image"
            />
          </>
        ))}
      </ul>
      <ul>
        {planets.length && planets[1]?.map((person) => (
          <>
            <li>{person.name}</li>
            <img
              src={person.imgUrl}
              alt={person.name}
              className="list-element__image"
            />
          </>
        ))}
      </ul>
      <ul>
        {planets.length && planets[2]?.map((person) => (
          <>
            <li>{person.name}</li>
            <img
              src={person.imgUrl}
              alt={person.name}
              className="list-element__image"
            />
          </>
        ))}
      </ul>
      <ul>
        {planets.length && planets[3]?.map((person) => (
          <>
            <li>{person.name}</li>
            <img
              src={person.imgUrl}
              alt={person.name}
              className="list-element__image"
            />
          </>
        ))}
      </ul>
      <ul>
        {planets.length && planets[4]?.map((person) => (
          <>
            <li>{person.name}</li>
            <img
              src={person.imgUrl}
              alt={person.name}
              className="list-element__image"
            />
          </>
        ))}
      </ul>
      <ul>
        {planets.length && planets[5]?.map((person) => (
          <>
            <li>{person.name}</li>
            <img
              src={person.imgUrl}
              alt={person.name}
              className="list-element__image"
            />
          </>
        ))}
      </ul>
    </>
  );
};

Apitest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  planets: PropTypes.shape([]).isRequired
};

const mapStateToProps = (state) => ({
  planets: state.swapiReducer
});

export default connect(mapStateToProps)(Apitest);
