import React from 'react';
import SliderCarousel from '../../common/components/slider-most-viewed/index';
import SlideShow from '../../common/components/slide-show/slideShow';
import { TYPE_PARAMS } from '../../common/services/films';
import './home.css';
import Heading from '../../common/components/heading/Heading';

const Home = () => (
  <>
    <SlideShow />
    <div className="banner-container">
      <div className="banner-container__first">
        <Heading content="Las más vistas" type={2} />
        <SliderCarousel type={TYPE_PARAMS.popular} />
      </div>
      <div className="banner-container__second">
        <Heading content="Las más valoradas" type={2} />
        <SliderCarousel type={TYPE_PARAMS.topRated} />
      </div>
    </div>
  </>
);

export default Home;
