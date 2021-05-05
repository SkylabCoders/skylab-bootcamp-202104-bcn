import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { loadGlobalData } from '../../redux/actions/actionCreators';

const Global = ({ globalData, dispatch }) => {
  useEffect(() => {
    dispatch(loadGlobalData());
  }, []);

  return (
    <>
      <h1>Global</h1>
      <h3>Affected countries: 220</h3>
      <section className="mainData">
        <ul className="globalCards">
          { globalData
        && globalData.map(([element, value]) => (
          <li key={element} className="total">
            <p className="identifier">{element}</p>
            <p className="number">{value}</p>
          </li>
        ))}
        </ul>
      </section>
      <section className="vaccinatedByContinent">
        <h2>Vaccinated by continents</h2>
        <p>test test </p>
      </section>

    </>

  );
};

Global.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData }) => ({ globalData: Object.entries(globalData) });

export default connect(mapStateToProps)(Global);
