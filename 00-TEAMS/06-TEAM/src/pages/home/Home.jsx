import React from 'react';
import SliderCarousel from '../../common/components/slider-most-viewed/index';
import SlideShow from '../../common/components/slide-show/slideShow';
import { TYPE_PARAMS } from '../../common/services/films';
import './home.css';
import Heading from '../../common/components/heading/Heading';
import actionTypes from '../../application/store/actions/actionTypes';

const Home = () => (
  <>
    <SlideShow />
    <div className="banner-container">
      <div className="banner-container__first">
        <Heading content={actionTypes.LOAD_TITLE_MOST_VIEWED} type={2} />
        <SliderCarousel type={TYPE_PARAMS.popular} />
      </div>
      <div className="banner-container__second">
        <Heading content={actionTypes.LOAD_TITLE_MOST_VALUED} type={2} />
        <SliderCarousel type={TYPE_PARAMS.topRated} />
      </div>
    </div>
  </>
);

export default Home;
