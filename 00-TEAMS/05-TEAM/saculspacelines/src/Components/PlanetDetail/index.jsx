import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './form.css';

const PlanetDetail = ({
  data, clickHandler
}) => {
  const
    {
      name,
      diameter,
      climate,
      gravity,
      terrain,
      population,
      imgUrl
      // faction
    } = data;

  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => {
    setShowDetails(!showDetails);
  };
  return (
    <li key={name} className="planet">
      <button
        type="button"
        onClick={() => clickHandler(data)}
      >
        <img
          src={imgUrl}
          alt={name}
          className="planet__image"
        />
      </button>
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
                Rotation period:
                {' '}
                {data.rotation_period}
              </li>
              <li className="planetList__orbital">
                Orbital period:
                {' '}
                {data.orbital_period}
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
                {data.surface_water}
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }).isRequired,

  clickHandler: PropTypes.func.isRequired
};

export default PlanetDetail;
