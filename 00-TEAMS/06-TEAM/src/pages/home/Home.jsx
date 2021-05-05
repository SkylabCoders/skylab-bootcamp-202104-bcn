import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import DrawTitleMostViewed from '../../common/components/title-sliders/title-most-viewed/DrawTitleMostViewed';
import { TYPE_PARAMS } from '../../common/services/films';
import './home.css';

const Home = () => (
  <>
    <SlideShow />
    <div className="banner-container">
      <div className="banner-container__first">
        <DrawTitleMostViewed />
        <MostViwedMovies type={TYPE_PARAMS.popular} />
      </div>
      <div className="banner-container__second">
        <h1>Upcoming</h1>
        <MostViwedMovies type={TYPE_PARAMS.topRated} />
      </div>
    </div>
  </>
);

export default Home;
