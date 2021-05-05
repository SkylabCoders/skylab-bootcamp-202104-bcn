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
          ['Region Code', 'Continent', 'People vaccinated', 'People partially vaccinated'],
          ['142', 'Asia', 200, 200],
          ['150', 'Europe', 300, 300],
          ['019', 'Americas', 400, 400],
          ['009', 'Oceania', 600, 600],
          ['002', 'Africa', 700, 700]
        ]}
        options={{
          resolution: 'continents',
          colors: ['#FAB06C', '#FF3939']
        }}
        mapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  </>
);

export default Map;
