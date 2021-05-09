import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './form.css';

const StarshipDetail = ({
  data, clickHandler
}) => {
  const
    {
      name,
      model,
      manufacturer,
      length,
      crew,
      passengers,
      consumables,
      imgUrl,
      faction
    } = data;

  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li key={name} className={`starShip ${faction.toLowerCase()}`}>
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
        <p className={`details__name opened-${showDetails}`}>{name.toLowerCase()}</p>
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
                {model.toLowerCase()}
              </li>
              <li className="starShipList__manufacturer">
                Manufacturer:
                {' '}
                {manufacturer.toLowerCase()}
              </li>
              <li className="starShipList__credits">
                Cost in credits:
                {' '}
                {data.cost_in_credits.toLowerCase()}
              </li>
              <li className="starShipList__length">
                Length:
                {' '}
                {length.toLowerCase()}
              </li>
              <li className="starShipList__speed">
                Max atmosphering speed:
                {' '}
                {data.max_atmosphering_speed.toLowerCase()}
              </li>
              <li className="starShipList__crew">
                Crew:
                {' '}
                {crew.toLowerCase()}
              </li>
              <li className="starShipList__passengers">
                Passengers:
                {' '}
                {passengers.toLowerCase()}
              </li>
              <li className="starShipList__capacity">
                Cargo capacity:
                {' '}
                {data.cargo_capacity.toLowerCase()}
              </li>
              <li className="starShipList__consumables">
                Consumables:
                {' '}
                {consumables.toLowerCase()}
              </li>
              <li className="starShipList__hyperdrive">
                Hyperdrive rating:
                {' '}
                {data.hyperdrive_rating.toLowerCase()}
              </li>
              <li className="starShipList__class">
                Starship class:
                {' '}
                {data.starship_class.toLowerCase()}
              </li>
            </ul>
          )
          : null}

      </section>
    </li>
  );
};

StarshipDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    max_atmosphering_speed: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    cargo_capacity: PropTypes.string.isRequired,
    consumables: PropTypes.string.isRequired,
    hyperdrive_rating: PropTypes.string.isRequired,
    starship_class: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
    faction: PropTypes.string.isRequired
  }).isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default StarshipDetail;
