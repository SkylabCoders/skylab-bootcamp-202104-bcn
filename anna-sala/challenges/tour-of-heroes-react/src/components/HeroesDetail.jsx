/* eslint-disable react/prop-types */
import React from 'react';

function HeroesDetail({ heroToPrint }) {
  return (
    <div>
      <p>{heroToPrint.name }</p>
    </div>
  );
}

export default HeroesDetail;
