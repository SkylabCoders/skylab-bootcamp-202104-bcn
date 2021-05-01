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
          myCountries?.length && (
            myCountries.map((element) => <li>{element.name}</li>)
          )
        }
      </ul>
    </div>
  );
};

Countries.propTypes = {
  myCountries: PropTypes.shape([]).isRequired
  // dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ initialCountries }) => ({
  myCountries: initialCountries
});

export default connect(mapStateToProps)(Countries);
