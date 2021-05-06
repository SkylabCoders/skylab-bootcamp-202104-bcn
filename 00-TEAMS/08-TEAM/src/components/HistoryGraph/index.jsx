/* eslint-disable no-console */
import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.scss';
import { Line } from 'react-chartjs-2';
import { loadCountryHistory } from '../../redux/actions/actionCreators';

const HistoryGraph = ({ countryHistoryData, dispatch }) => {
  useEffect(() => {
    dispatch(loadCountryHistory('Spain', 'deaths'));
  }, []);

  const [state] = useState(
    {
      labels: ['January', 'February', 'March',
        'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 2,
          data: [65, 59, 50, 80, 81, 56]
        }
      ]
    }
  );

  console.log(countryHistoryData);

  return (
    <section className="global-graphs">
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </section>
  );
};

HistoryGraph.propTypes = {
  countryHistoryData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ countryHistoryData, dispatch }) => (
  {
    countryHistoryData,
    dispatch
  }
);

export default connect(mapStateToProps)(HistoryGraph);
