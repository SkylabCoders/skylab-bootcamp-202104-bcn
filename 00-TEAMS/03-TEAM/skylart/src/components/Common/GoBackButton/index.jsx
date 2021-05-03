import React from 'react';
import './GoBack.scss';
import goBackArrow from '../../../assets/goBackArrow.svg';

function GoBackButton() {
  return (
    <button className="go-back-button" type="button">
      Go Back
      <img src={goBackArrow} alt="arrow" />
    </button>
  );
}

export default GoBackButton;
