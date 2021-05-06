/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadGlobalData } from '../../redux/actions/actionCreators';
import './style.scss';
import Footer from '../Footer';
import Chart from '../Map/index';

const Dashboard = ({ globalData, dispatch }) => {
  useEffect(() => { dispatch(loadGlobalData()); }, []);
  return (
      <section className="dashboard">
      <div className="container">
      <p>Powered by WHO</p>
      <h1>
Tracking the virus worldwide.
      </h1>
      <h3>
Get the lastest updated info about the pandemic and vaccination by continent, country and region.
      </h3>
        <Chart />
      <ul>
        { globalData
        && globalData.map(([element, value]) => (
<li>
{element}
:
{value}
</li>
        ))}
      </ul>
      </div>
      <Footer />
      </section>
  );
};

Dashboard.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData }) => ({ globalData: Object.entries(globalData) });

export default connect(mapStateToProps)(Dashboard);
