import React from 'react-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadSwapi } from '../../redux/Actions/actionCreator';

const Apitest = ({ dispatch, people }) => {
  useEffect(() => {
    console.log(people);
    dispatch(loadSwapi());
  }, []);

  return (
    <ul>
      {people.length && people[0].map((person) => <li>{person.name}</li>)}
    </ul>
  );
};

Apitest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  people: PropTypes.shape([]).isRequired
};

const mapStateToProps = (state) => ({
  people: state.people
});

export default connect(mapStateToProps)(Apitest);
