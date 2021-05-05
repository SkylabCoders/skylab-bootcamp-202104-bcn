import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadGlobalData, loadVaccinesContinentData } from '../../redux/actions/actionCreators';

const Global = ({ globalData, vaccinesContinentData, dispatch }) => {
  useEffect(() => {
    dispatch(loadGlobalData());
  }, []);
  useEffect(() => {
    dispatch(loadVaccinesContinentData());
  }, []);

  console.log(vaccinesContinentData);

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
        <ul className="continentCards">
          { vaccinesContinentData
        && vaccinesContinentData.map((element) => (
          <li key={element.name} className="total">
            <p className="identifier">{element.name.toUpperCase()}</p>
            <p className="number">{element.data.administered}</p>
          </li>
        ))}
        </ul>

      </section>

    </>

  );
};

Global.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  vaccinesContinentData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData, vaccinesContinentData }) => (
  {
    globalData: Object.entries(globalData),
    vaccinesContinentData
  }
);

export default connect(mapStateToProps)(Global);
