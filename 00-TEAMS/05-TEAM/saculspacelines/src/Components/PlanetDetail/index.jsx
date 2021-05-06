import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './form.css';

const PlanetDetail = ({
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surfaceWater,
  population,
  imgUrl
//   faction
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li key={name} className="planet">
      <img
        src={imgUrl}
        alt={name}
        className="planet__image"
      />
      <section className="planet__details details">
        <p className="details__name">{name}</p>
        <button
          className="dropdownButton"
          type="button"
          onClick={handleShow}
        >
          Details
        </button>
        { showDetails
          ? (
            <ul className="details__list planetList">
              <li className="planetList__rotation">
                Rotarion period:
                {' '}
                {rotationPeriod}
              </li>
              <li className="planetList__orbital">
                Orbital period:
                {' '}
                {orbitalPeriod}
              </li>
              <li className="planetList__diameter">
                Diameter:
                {' '}
                {diameter}
              </li>
              <li className="planetList__climate">
                Climate:
                {' '}
                {climate}
              </li>
              <li className="planetList__gravity">
                Gravity:
                {' '}
                {gravity}
              </li>
              <li className="planetList__terrain">
                Terrain:
                {' '}
                {terrain}
              </li>
              <li className="planetList__surfaceWater">
                Surface water:
                {' '}
                {surfaceWater}
              </li>
              <li className="planetList__population">
                Population:
                {' '}
                {population}
              </li>
            </ul>
          )
          : null}

      </section>
    </li>

  //   const handlePlanetSelection = (url) => {
  //     setCurrentPlanet(url);
  //   };
  );
};
PlanetDetail.propTypes = {
  name: PropTypes.string.isRequired,
  rotationPeriod: PropTypes.string.isRequired,
  orbitalPeriod: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  surfaceWater: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default PlanetDetail;
