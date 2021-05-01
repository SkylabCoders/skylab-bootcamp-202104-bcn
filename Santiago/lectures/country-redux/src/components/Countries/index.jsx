import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCountries } from '../../redux/actions/actionCreator';

const Countries = ({ myCountries, dispatch }) => {
  const h1 = 'Countries';
  useEffect(() => {
    dispatch(loadCountries());
  }, []);

  return (
    <div>
      <h1>{h1}</h1>
      <ul>
        {
          myCountries?.length ? (
            myCountries.map((element) => <li>{element.name}</li>)
          ) : <h2>No Countries to show</h2>
        }
      </ul>
    </div>
  );
};

Countries.propTypes = {
  myCountries: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

// Este countries es el del rootReducer countries: countriesReducer
const mapStateToProps = ({ countries }) => ({
  myCountries: countries
});

export default connect(mapStateToProps)(Countries);
