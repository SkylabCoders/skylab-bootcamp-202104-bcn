/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import loadInformation from '../../redux/actions/actionCreators';
import './Details.css';

function Details({ details, dispatch }) {
  useEffect(() => {
    dispatch(loadInformation());
  }, []);
  return (
    <>
      <main className="containerDetail">
        <div className="containerDetail__information-experience">
          { details?.experience && (details?.experience).map((detail) => (
            <ul>
              <h2>{detail.name}</h2>
              <h3>{detail.place}</h3>
              <p>{detail.duration}</p>
              <p>{detail.description}</p>
            </ul>
          ))}
        </div>
        <div className="containerPresentation__information-education">
          { details?.education && (details?.education).map((detail) => (
            <ul>
              <h2>{detail.name}</h2>
              <h3>{detail.place}</h3>
              <p>{detail.duration}</p>
              <p>{detail.description}</p>
            </ul>
          ))}
        </div>
        <div className="containerPresentation__information-languages">
          { details?.languages && (details?.languages).map((detail) => (
            <ul>
              <h2>{detail.name}</h2>
              <h3>{detail.level}</h3>
            </ul>
          ))}
        </div>
        <div className="containerPresentation__information-more">
          { details?.more && (details?.more).map((detail) => (
            <ul>
              <button type="button" className="moreLinks"><a type="button" target="_blank" href={detail.link} rel="noreferrer">{detail.name}</a></button>
            </ul>
          ))}
        </div>
      </main>
    </>
  );
}

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Details);
