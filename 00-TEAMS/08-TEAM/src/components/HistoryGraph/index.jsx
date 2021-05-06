/* eslint-disable no-console */
import { React, useState } from 'react';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import './style.scss';
import { Line } from 'react-chartjs-2';

const HistoryGraph = () => {
  const [state] = useState(
    {
      labels: ['January', 'February', 'March',
        'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]
    }
  );

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

// HistoryGraph.propTypes = {
//   globalData: PropTypes.shape([]).isRequired
// };

const mapStateToProps = ({ globalData }) => (
  {
    globalData: Object.entries(globalData)
  }
);

export default connect(mapStateToProps)(HistoryGraph);
