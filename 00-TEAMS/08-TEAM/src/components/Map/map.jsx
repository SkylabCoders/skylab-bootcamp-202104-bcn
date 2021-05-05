/* eslint-disable no-console */
import React from 'react';
import { Chart } from 'react-google-charts';

const Map = () => (
  <>
    <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        width="500px"
        height="300px"
        chartType="GeoChart"
        data={[
          ['Region Code', 'Continent', 'Popularity'],
          ['142', 'Asia', 200],
          ['150', 'Europe', 300],
          ['019', 'Americas', 400],
          ['009', 'Oceania', 600],
          ['002', 'Africa', 700]
        ]}
        options={{
          resolution: 'continents',
          colors: ['#002e5f', '#CCCCCC']
        }}
        mapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  </>
);

export default Map;
