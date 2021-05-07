import React from 'react';
import './Slider.css';
import bannerImage from '../../../images/macbook-pro-banner.jpeg';

const Slider = () => (
  <div className="slider">
    <img src={bannerImage} alt="macbook-pro" />
  </div>
);

Slider.propTypes = {

};

export default Slider;
