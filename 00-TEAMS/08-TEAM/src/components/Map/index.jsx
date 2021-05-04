/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadVaccinesContinentData } from '../../redux/actions/actionCreators';

const MapWorldWide = ({ vaccinesContinentData, dispatch }) => {
  useEffect(() => { dispatch(loadVaccinesContinentData()); }, []);
  console.log('vaccines', vaccinesContinentData);
  //   const drawChart = () => {
  //     // Define the chart to be drawn.
  //     const data = new google.visualization.DataTable();
  //     data.addColumn('string', 'Element');
  //     data.addColumn('number', 'Percentage');
  //     data.addRows([
  //       ['Nitrogen', 0.78],
  //       ['Oxygen', 0.21],
  //       ['Other', 0.01]
  //     ]);

  //     // Instantiate and draw the chart.
  //     const chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  //     chart.draw(data, null);
  //   };
  return (
    <div>
      <h1>Vaccines</h1>
      <ul>
        { vaccinesContinentData
        && vaccinesContinentData.map(([element, value]) => (
          <li>
            {element}
            :
            {value}
          </li>
        ))}
      </ul>
    </div>

  );
};

MapWorldWide.propTypes = {
  vaccinesContinentData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ vaccinesContinentData }) => ({
  vaccinesContinentData:
  Object.entries(vaccinesContinentData)
});

export default connect(mapStateToProps)(MapWorldWide);
