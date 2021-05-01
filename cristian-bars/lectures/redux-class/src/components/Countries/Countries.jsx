import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadCountries from '../../redux/actions/actionCreators';

const Countries = ({ myCountries, dispatch }) => {
  const h1 = 'Dashboard';
  useEffect(() => {
    dispatch(loadCountries());
  }, []);
  return (
    <div>
      <h1>{h1}</h1>
      <ul>
        {
              myCountries?.length ? (myCountries.map(
                (element) => <li>{element.name}</li>
              )
              ) : <h2>No countries to show</h2>
          }
      </ul>
    </div>
  );
};

Countries.propTypes = {
  myCountries: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ initialCountries }) => ({
  myCountries: initialCountries
});

export default connect(mapStateToProps)(Countries);
