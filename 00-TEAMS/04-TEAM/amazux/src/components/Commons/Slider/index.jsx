import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './Slider.css';
import bannerImage from '../../../images/macbook-pro-banner.jpeg';

const Slider = ({ productUrl }) => (
  <div className="slider">
    <Link to={productUrl}>
      <img src={bannerImage} alt="macbook-pro" />
    </Link>
  </div>
);

Slider.propTypes = {
  productUrl: PropTypes.string.isRequired
};

export default Slider;
