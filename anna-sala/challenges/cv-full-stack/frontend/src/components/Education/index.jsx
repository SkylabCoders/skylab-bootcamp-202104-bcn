import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';

import('./education.scss');

function Education({ curriculum }) {
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
          <span className="education__title">Education</span>
          <div className="education-container">
            <ul>
              {curriculum[0].person.education.map((school) => (
                <li className="education-school">
                  <h3>{school.place}</h3>
                  <p>{school.timeFrame}</p>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/experience">
            <figure className="arrow-container__ed">
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

Education.propTypes = {
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
export default connect(mapStateToProps)(Education);
