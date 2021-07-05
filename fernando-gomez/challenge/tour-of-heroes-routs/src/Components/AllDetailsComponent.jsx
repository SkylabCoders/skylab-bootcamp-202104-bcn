/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const AllHeroDetails = ({ hero }) => {
  if (hero) {
    return (
      <section>
        <h1>
          {hero.superhero}
          {' '}
          with id
          {' '}
          {hero.id}
        </h1>
        <p>
          Publisher:
          {' '}
          {hero.publisher}
        </p>
        <p>
          Alter ego:
          {' '}
          {hero.ater_ego}
        </p>
        <p>
          First appearance:
          {' '}
          {hero.first_appearance}
        </p>
        <p>
          Characters:
          {' '}
          {hero.characters}
        </p>
        <Link to="/">
          Back to the list
        </Link>
      </section>
    );
  }
  return '';
};

export default AllHeroDetails;
