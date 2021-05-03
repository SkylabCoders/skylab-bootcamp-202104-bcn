import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadSwapi } from '../../redux/Actions/actionCreator';

const Apitest = ({ people = [], dispatch }) => {
  useEffect(() => {
    console.log(people);
    if (!people.length) dispatch(loadSwapi());
  }, []);

  return (
    <ul>
      {people.map((person) => <li>{person.name}</li>)}
    </ul>
  );
};

Apitest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  people: PropTypes.shape([]).isRequired
};

const mapStateToProps = (state) => ({
  people: state.data
});

export default connect(mapStateToProps)(Apitest);
