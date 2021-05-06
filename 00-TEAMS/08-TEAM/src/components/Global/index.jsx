/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadGlobalData, loadVaccinesByContinent } from '../../redux/actions/actionCreators';
import './style.scss';

const Global = ({ globalData, vaccinesByContinentData, dispatch }) => {
  useEffect(() => {
    dispatch(loadGlobalData());
  }, []);
  useEffect(() => {
    dispatch(loadVaccinesByContinent());
  }, []);

  console.log({ globalData });
  console.log({ vaccinesByContinentData });
  // eslint-disable-next-line no-console
  // console.log(vaccinesByContinentData);

  // const entries = ['administered',
  //   'people_vaccinated', 'people_partially_vaccinated', 'updated'];

  return (
    <>
      <main className="global">
        <div className="container">
          <div className="title">
            <h1>Global</h1>
            <h3>Affected countries: 220</h3>
          </div>
        </div>
      </main>
    </>
  );
};

Global.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  vaccinesByContinentData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData, vaccinesByContinentData }) => (
  {
    globalData: Object.entries(globalData),
    vaccinesByContinentData
  }
);

export default connect(mapStateToProps)(Global);
