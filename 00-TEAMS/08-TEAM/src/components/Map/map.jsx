/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Chart } from 'react-google-charts';

const Map = ({ vaccinesContinentData }) => {
  console.log(vaccinesContinentData);
  return (
    <>
      <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
          width="500px"
          height="300px"
          chartType="GeoChart"
          data={vaccinesContinentData}
          options={{
            resolution: 'continents',
            colors: ['#FAB06C', '#FF3939'],
            backgroundColor: 'transparent'
          }}
          mapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </>
  );
};

Map.propTypes = {
  vaccinesContinentData: PropTypes.shape([]).isRequired
};

const mapStateToProps = ({ vaccinesContinentData }) => ({
  vaccinesContinentData
});

export default connect(mapStateToProps)(Map);
