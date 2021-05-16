import React from 'react';
import connect from 'react-dom';
import './Presentation.css';
import { PropTypes } from 'prop-types';
import profilePic from '../../assets/profile-pic.png';
import informations from '../../redux/store/index';

function Presentation({ informations, dispatch }) {
  return (
    <>
      <main className="containerPresentation">
        <div className="containerPresentation__information">
          <div className="containerPresentation__information-img">
            <img src={profilePic} alt="User" />
          </div>
          <div className="containerPresentation__information-text">
            <h1>Gemma Teixidó Sánchez</h1>
            <h2>Full Stack Dev.</h2>
            <p>
              Skylab Coders Academy | JavaScript | React JS | GIT
              | HTML | CSS | Testing | NodeJS | MongoDB
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

Presentation.propTypes = {
  heroes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return ({
    informations: store.informations
  });
}

export default connect(mapStateToProps)(Presentation);
