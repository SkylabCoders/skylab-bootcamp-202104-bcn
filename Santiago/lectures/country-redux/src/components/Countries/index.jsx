import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Countries = ({ myCountries }) => {
  const h1 = 'Countries';
  return (
    <div>
      {h1}
      <ul>
        {
          myCountries?.lenght ? (myCountries.map((countryElement) => (
            <li>
              {countryElement.name}
            </li>
          ))
          ) : <h2>No countries to show</h2>
      }
      </ul>
    </div>
  );
};

Countries.propTypes = {

  myCountries: PropTypes.shape([]).isRequired
  // dispatch: PropTypes.func.isRequired

};

const mapStateToProps = (store) => (
  { myCountries: store.initialCountries }
);

export default connect(mapStateToProps)(Countries);
