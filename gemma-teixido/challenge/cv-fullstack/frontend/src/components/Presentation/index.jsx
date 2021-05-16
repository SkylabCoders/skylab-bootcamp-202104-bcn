/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import './Presentation.css';
import loadInformation from '../../redux/actions/actionCreators';
import profilePic from '../../assets/profile-pic.png';

function Presentation({ details, dispatch }) {
  useEffect(() => {
    dispatch(loadInformation());
  }, []);
  return (
    <>
      <main className="containerPresentation">
        <div className="containerPresentation__information">
          <div className="containerPresentation__information-img">
            <img src={profilePic} alt="User" />
          </div>
          <div className="containerPresentation__information-text">
            <h1>{details.Name}</h1>
            <h2>{details.Title}</h2>
            <p>
              {details.Description}
            </p>
          </div>
          <div className="containerPresentation__information-button">
            <button className="moreInfo" type="button">More Info</button>
          </div>
        </div>
      </main>
    </>
  );
}

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Presentation);
