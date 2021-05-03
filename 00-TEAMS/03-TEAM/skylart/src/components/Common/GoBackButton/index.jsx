import React from 'react';
import { Link } from 'react-router-dom';
import './GoBack.scss';
import goBackArrow from '../../../assets/goBackArrow.svg';

function GoBackButton() {
  return (
    <Link to="/" className="go-back-button">
      Go Back
      <img src={goBackArrow} alt="arrow" />
    </Link>
  );
}

export default GoBackButton;
