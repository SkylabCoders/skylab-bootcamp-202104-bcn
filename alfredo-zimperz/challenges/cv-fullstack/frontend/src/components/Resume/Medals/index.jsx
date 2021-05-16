import React from 'react';
import PropTypes from 'prop-types';
import './medals.css';

const colorsArray = ['blue', 'pink', 'yellow', 'green', 'gray', 'red'];
const getRandomColorClass = (classArray) => {
  const index = Math.floor(Math.random() * (classArray.length));
  return classArray[index];
};

console.log(getRandomColorClass(colorsArray));

const Medals = ({ medals }) => (
  <div className="medals">
    <div className="medal__container">
      <h2>My stack</h2>
      <div className="medal-list">
        {medals.map((medal) => (
          <span className={`label ${getRandomColorClass(colorsArray)}`}>{medal}</span>
        ))}
      </div>
    </div>

  </div>
);

Medals.propTypes = {
  medals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Medals;
