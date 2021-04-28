/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
// import { useParams } from 'react-router';

const SeeMore = ({ hero }) => (

  <Link to={hero.id}>
    See more
  </Link>

);

export default SeeMore;
