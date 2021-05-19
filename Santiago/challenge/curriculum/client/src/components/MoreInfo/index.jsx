import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function Moreinfo({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <>
      <div className="languages">
        <h3>Languages</h3>
        {
          details.map((detail) => detail.languages.map((language) => (
            <ul>
              <p>{`Name: ${language.name}`}</p>
              <p>{`Level: ${language.level}`}</p>
            </ul>
          )))
        }
      </div>

      <div className="social-media">
        <h3>Follow me in:</h3>
        {
          details.map(((detail) => (
            <>
              <p>{detail.socialMedia.linkedin}</p>
              <p>{detail.socialMedia.github}</p>
            </>
          )))
        }
      </div>
    </>
  );
}

Moreinfo.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Moreinfo);
