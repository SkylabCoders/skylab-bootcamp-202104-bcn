/* eslint-disable no-console */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.scss';
import { Line } from 'react-chartjs-2';
import { loadCountryHistory } from '../../redux/actions/actionCreators';

const HistoryGraph = ({ countryHistoryData, dispatch }) => {
  useEffect(() => {
    dispatch(loadCountryHistory('Germany', 'confirmed'));
  }, []);

  // const last30DaysData = Object.values(countryHistoryData).reverse();

  console.log(countryHistoryData);

  return (
    <section className="global-graphs">
      <Line
        data={{
          labels: [...countryHistoryData],
          datasets: [
            {
              label: 'Deaths',
              data: [...countryHistoryData],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }

          ]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          legend: {
            labels: {
              fontSize: 25
            }
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
    countryHistoryData: Object.values(countryHistoryData).reverse(),
    dispatch
  }
);

export default connect(mapStateToProps)(HistoryGraph);
