/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { loadCountry, loadVaccinesByCountry } from '../../redux/actions/actionCreators';
import './style.scss';
import FavoriteButton from '../FavoriteButton';
import HistoryGraph from '../HistoryGraph';

function Country({ dispatch, countryData, vaccineByCountryData }) {
  const { country } = useParams();
  useEffect(() => { dispatch(loadCountry(country)); }, [country]);
  useEffect(() => { dispatch(loadVaccinesByCountry(country)); }, [country]);

  const myInterestValuesArray = ['confirmed', 'recovered', 'deaths', 'population', 'updated'];
  const myInterestVaccinesValuesArray = ['administered', 'people_vaccinated', 'people_partially_vaccinated'];
  const myCountryStats = [];
  const myCountryVaccineStats = [];

  function getStatsCountryValues() {
    Object.entries(countryData).map(([element, value]) => {
      if (myInterestValuesArray.find((keys) => keys === element)) {
        myCountryStats.push([element, value]);
      }
      return myCountryStats;
    });
  }
  function getVaccinesCountryValues() {
    Object.entries(vaccineByCountryData).map(([element, value]) => {
      if (myInterestVaccinesValuesArray.find((keys) => keys === element)) {
        myCountryVaccineStats.push([element, value]);
      }
      return myCountryVaccineStats;
    });
  }

  getStatsCountryValues();
  getVaccinesCountryValues();

  return (
    <>
      <section className="country-section">
        <div className="country-section__data">
          <h1>{country}</h1>
          <FavoriteButton />
          <ul>
            {myCountryStats.map((value) => (
              <li key={`${value}`}>
                {value}
              </li>
            ))}
          </ul>
          <h1>
            Vaccines
            {' '}

          </h1>
          <ul>
            {myCountryVaccineStats.map((value) => (
              <li key={`${value}`}>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <HistoryGraph />
      </section>
    </>
  );
}

Country.propTypes = {
  dispatch: PropTypes.func.isRequired,
  countryData: PropTypes.shape({}).isRequired,
  vaccineByCountryData: PropTypes.shape({}).isRequired
};

function mapStateToProps(store) {
  return {
    countryData: store.countryData,
    vaccineByCountryData: store.vaccineByCountryData
  };
}

export default connect(mapStateToProps)(Country);
