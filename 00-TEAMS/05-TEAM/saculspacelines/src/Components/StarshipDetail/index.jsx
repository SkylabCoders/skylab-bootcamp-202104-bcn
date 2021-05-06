import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './form.css';

const StarshipDetail = ({
  data
}) => {
  const
    {
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      maxAtmospheringSpeed,
      crew,
      passengers,
      cargoCapacity,
      consumables,
      hyperdriveRating,
      starshipClass,
      clickHandler,
      imgUrl
      // faction
    } = data;

  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li key={name} className="starShip">
      <button
        type="button"
        onClick={clickHandler}
      >
        <img
          src={imgUrl}
          alt={name}
          className="starShip__image"
        />
      </button>
      <section className="starShip__details details">
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
            <ul className="details__list starShipList">
              <li className="starShipList__model">
                Model:
                {' '}
                {model}
              </li>
              <li className="starShipList__manufacturer">
                Manufacturer:
                {' '}
                {manufacturer}
              </li>
              <li className="starShipList__credits">
                Cost in credits:
                {' '}
                {costInCredits}
              </li>
              <li className="starShipList__length">
                Length:
                {' '}
                {length}
              </li>
              <li className="starShipList__speed">
                Max atmosphering speed:
                {' '}
                {maxAtmospheringSpeed}
              </li>
              <li className="starShipList__crew">
                Crew:
                {' '}
                {crew}
              </li>
              <li className="starShipList__passengers">
                Passengers:
                {' '}
                {passengers}
              </li>
              <li className="starShipList__capacity">
                Cargo capacity:
                {' '}
                {cargoCapacity}
              </li>
              <li className="starShipList__consumables">
                Consumables:
                {' '}
                {consumables}
              </li>
              <li className="starShipList__hyperdrive">
                Hyperdrive rating:
                {' '}
                {hyperdriveRating}
              </li>
              <li className="starShipList__class">
                Starship class:
                {' '}
                {starshipClass}
              </li>
            </ul>
          )
          : null}

      </section>
    </li>

  //   const handlestarShipSelection = (url) => {
  //     setCurrentPlanet(url);
  //   };
  );
};

StarshipDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    costInCredits: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    maxAtmospheringSpeed: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    cargoCapacity: PropTypes.string.isRequired,
    consumables: PropTypes.string.isRequired,
    hyperdriveRating: PropTypes.string.isRequired,
    starshipClass: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
  }).isRequired
};

export default StarshipDetail;
