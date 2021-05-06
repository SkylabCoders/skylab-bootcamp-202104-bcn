/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Chart } from 'react-google-charts';
import { loadVaccinesContinentData } from '../../redux/actions/actionCreators';

const Map = ({ vaccinesContinentData, dispatch }) => {
  useEffect(() => { dispatch(loadVaccinesContinentData()); }, []);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 900 }}>
        <Chart
          width="500px"
          height="300px"
          chartType="GeoChart"
          data={vaccinesContinentData}
          options={{
            resolution: 'continents',
            colors: ['green', '#C4D64E'],
            backgroundColor: 'transparent',
            legend: {
              textStyle: {
                color: 'black', bold: false, fontSize: 20, fontName: 'Raleway'
              }
            }

          }}
          mapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </>
  );
};

Map.propTypes = {
  vaccinesContinentData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ vaccinesContinentData }) => ({
  vaccinesContinentData
});

export default connect(mapStateToProps)(Map);
