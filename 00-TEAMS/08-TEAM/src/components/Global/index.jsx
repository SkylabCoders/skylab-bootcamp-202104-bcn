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

  const entries = ['administered',
    'people_vaccinated', 'people_partially_vaccinated', 'updated'];

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
        && vaccinesContinentData.map(({ name, data }) => (
          <li key={name}>
            <p className="card-name">{name.toUpperCase()}</p>
            {entries.map((entry) => (
              <p className="card-entry">
                {entry}
                {' '}
                :
                {' '}
                {data[entry]}
              </p>
            ))}
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
