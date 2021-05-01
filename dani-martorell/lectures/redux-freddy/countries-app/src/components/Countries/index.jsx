import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Countries = ({ myCountries }) => {
  const h1 = 'Countries';
  return (
    <div>
      <h1>{h1}</h1>
      <ul>
        {
              myCountries?.length ? (
                (country) => {
                  <li key={country.id}>{country.name}</li>;
                }
              ) : <h2>No countries at all</h2>
          }
      </ul>
    </div>
  );
};

Countries.propTypes = {
  myCountries: PropTypes.shape([]).isRequired,
//   dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ initialCountries }) => ({
  myCountries: initialCountries,
});
export default connect(mapStateToProps)(Countries);
