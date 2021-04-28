import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import HEROES from '../../constans/heroes';
import './HeroDetail.css';
import { updateHero } from '../../redux/actions/actionCreators';

function HeroDetail({ selectedHero }) {
  const { heroId } = useParams();
  const [hero, setSelectHero] = useState(selectedHero);

  useEffect(() => {
    setSelectHero(HEROES.find((current) => current.id === +heroId));
  }, [heroId]);

  function handleNameChange(event) {
    setSelectHero(
      {
        ...selectedHero,
        name: event.target.value
      }
    );
  }

  return (
    selectedHero
      ? (
        <div>
          <h2>
            {selectedHero.name}
            {' '}
            details
          </h2>
          <div>
            <span>id: </span>
            {selectedHero.id}
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero name:
              <input
                id="hero-name"
                value={selectedHero.name}
                onChange={handleNameChange}
                placeholder="Hero name"
              />
            </label>
          </div>
          <div>
            <button type="button">go back</button>
            <button type="button">save</button>
          </div>
        </div>
      )
      : (
        <div>
          <h3>
            No hay heroe con la id=
            {heroId}
          </h3>
        </div>
      )
  );

  HeroDetail.protoTypes = {
    hero: PropTypes.shape({
      id: PropTypes.name

    }).isRequired
  };

  function mapStateToProps({ selectedHero }) {
    return {
      selectedHero
    };
  }
}
export default connect(mapStateToProps)(HeroDetail);
