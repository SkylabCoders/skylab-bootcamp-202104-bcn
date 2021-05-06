import React from 'react';
import SliderCarousel from '../../common/components/slider-most-viewed/index';
import SlideShow from '../../common/components/slide-show/slideShow';
import { TYPE_PARAMS } from '../../common/services/films';
import './home.css';
import Heading from '../../common/components/TitleSlider/TitleSlider';

const Home = () => (
  <>
    <SlideShow />
    <div className="banner-container">
      <div className="banner-container__first">
        <Heading Content="Las más vistas" Type="2" />
        <SliderCarousel type={TYPE_PARAMS.popular} />
      </div>
      <div className="banner-container__second">
        <Heading Content="Las más valoradas" Type="2" />
        <SliderCarousel type={TYPE_PARAMS.topRated} />
      </div>
    </div>
  </>
);

export default Home;
