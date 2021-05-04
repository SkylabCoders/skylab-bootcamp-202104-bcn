import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadVaccinesData } from '../../redux/actions/actionCreators';

const MapWorldWide = ({ globalVaccinesData, dispatch }) => {
  useEffect(() => { dispatch(loadVaccinesData()); }, []);
  // eslint-disable-next-line no-console
  console.log('vaccines', globalVaccinesData);
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
        {Object.entries(globalVaccinesData).map(([e, value]) => (
          <li ket={e}>
            {e}
            :
            {value}
          </li>
        ))}
      </ul>
    </div>

  );
};

MapWorldWide.propTypes = {
  globalVaccinesData: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({ globalVaccinesData: store.globalVaccinesData });

export default connect(mapStateToProps)(MapWorldWide);
