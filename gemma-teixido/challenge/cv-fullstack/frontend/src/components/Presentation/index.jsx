/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import './Presentation.css';
import { Link } from 'react-router-dom';
import loadInformation from '../../redux/actions/actionCreators';

function Presentation({ details, dispatch }) {
  useEffect(() => {
    dispatch(loadInformation());
  }, []);
  return (
    <>
      <main className="containerPresentation">
        <div className="containerPresentation__information">
          <div className="containerPresentation__information-img">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH_ug7wph9KKw/profile-displayphoto-shrink_400_400/0/1584701161222?e=1626912000&v=beta&t=NFDCX_xJL63YHCLcu5RdEmfB_HUwMyNhJVGMy2ZLFBw" alt="User" />
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
