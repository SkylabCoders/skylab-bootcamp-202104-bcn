import React from 'react-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPlanets } from '../../redux/Actions/actionCreator';

const Apitest = ({ dispatch, people }) => {
  useEffect(() => {
    dispatch(loadPlanets());
  }, []);

  return (
    <ul>
      {people.length && people[0].map((person) => (
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
  );
};

Apitest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  people: PropTypes.shape([]).isRequired
};

const mapStateToProps = (state) => ({
  people: state.payload
});

export default connect(mapStateToProps)(Apitest);
