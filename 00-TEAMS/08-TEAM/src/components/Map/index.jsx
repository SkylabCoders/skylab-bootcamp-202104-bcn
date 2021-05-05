/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadVaccinesContinentData } from '../../redux/actions/actionCreators';

const MapWorldWide = ({ vaccinesContinentData, dispatch }) => {
  useEffect(() => { dispatch(loadVaccinesContinentData()); }, []);
  console.log('vaccines', vaccinesContinentData);

  return (
    <div>
      <h1>Vaccines</h1>
      <ul>
        { vaccinesContinentData?.length > 0
        && vaccinesContinentData.map(({ name, data }) => (
          <li>
            {name}
            {Object.entries(data.All).map(([key, value]) => (
              <li>
                {key}
                :
                {value}
              </li>
            ))}
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
  vaccinesContinentData
});

export default connect(mapStateToProps)(MapWorldWide);
