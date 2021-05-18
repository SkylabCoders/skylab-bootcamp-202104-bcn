import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';

import('./personalInfo.scss');

function PersonalInfo({ curriculum }) {
  return (
    <>
      {
      curriculum.length
      && (
        <>
          <div className="headers-info">
            <h1 className="headers__element">{curriculum[0].person.name}</h1>
            <h2 className="headers__element">{curriculum[0].person.position}</h2>
          </div>
          <div className="personalInfo">
            <div className="personalInfo__container">
              <ul>
                <span className="personalInfo__title">Personal Info</span>

                <li key={curriculum[0].person.personalInfo.address}>
                  ADDRESS:
                  <br />
                  {' '}
                  {curriculum[0].person.personalInfo
                    .address}

                </li>
                <li key={curriculum[0].person.personalInfo.phone}>
                  PHONE:
                  <br />
                  {' '}
                  {curriculum[0].person.personalInfo
                    .phone}

                </li>
                <li key={curriculum[0].person.personalInfo.email}>
                  EMAIL:
                  <br />
                  {' '}
                  {curriculum[0].person.personalInfo
                    .email}

                </li>
                <li key={curriculum[0].person.personalInfo.website}>
                  WWW:
                  <br />
                  {' '}
                  {curriculum[0].person.personalInfo
                    .website}

                </li>
                <li key={curriculum[0].person.personalInfo.linkedin}>
                  LINKEDIN:
                  <br />
                  {' '}
                  {curriculum[0].person.personalInfo
                    .linkedin}

                </li>
                <li key={curriculum[0].person.personalInfo.instagram}>
                  INSTAGRAM:
                  <br />
                  {' '}
                  {curriculum[0].person.personalInfo
                    .instagram}

                </li>
              </ul>
            </div>
            <div className="personalInfo__container">
              <ul>
                <span className="personalInfo__title">Skills</span>
                {curriculum[0].person.skills.graphicDesign.map((skill) => (
                  <li
                    key={curriculum[0].person.skills.graphicDesign.skill}
                  >
                    {skill}
                  </li>
                ))}
                {curriculum[0].person.skills.webDevelopment.map((skill) => (
                  <li
                    key={curriculum[0].person.skills.webDevelopment.skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="PersonalInfo__container" />
          </div>
          <Link to="/education">
            <figure className="arrow-container">
              <img
                src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png"
                alt="arrow"
                className="arrow"
              />
            </figure>
          </Link>
        </>
      )
    }
    </>
  );
}

PersonalInfo.propTypes = {
  curriculum: PropTypes.shape([{
    person: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }]).isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}
export default connect(mapStateToProps)(PersonalInfo);
