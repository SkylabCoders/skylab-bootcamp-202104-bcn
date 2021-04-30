import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeroDetailComponent = ({ id, publisher, alterEgo }) => (
  <>
    <p>
      Publisher:
      {' '}
      {publisher}
    </p>
    <p>
      Alter ego:
      {alterEgo}
    </p>
    <Link to={`./heroes/${id}`}>Mas detalles</Link>
  </>
);

HeroDetailComponent.propTypes = {
  id: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alterEgo: PropTypes.string.isRequired,
};

export default HeroDetailComponent;
