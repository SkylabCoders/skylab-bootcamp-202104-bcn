import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadCountries from '../../redux/actions/actionCreators';
import './countries.css';

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
              myCountries?.length && (
                myCountries.map((country) => <li key={country.id}>{country.name}</li>)
              )
}
      </ul>
    </div>
  );
};

Countries.propTypes = {
  myCountries: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ countries }) => ({
  myCountries: countries,
});
export default connect(mapStateToProps)(Countries);
