/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import './Presentation.css';
import { Link } from 'react-router-dom';
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
            <h1>{details.name}</h1>
            <h2>{details.title}</h2>
            <p>
              {details.description}
            </p>
          </div>
          <div className="containerPresentation__information-button">
            <Link to="/details">
              <button className="moreInfo" type="button">
                More Info
              </button>
            </Link>
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
