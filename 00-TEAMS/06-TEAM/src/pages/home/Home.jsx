import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import DrawTitleMostViewed from '../../common/components/title-sliders/title-most-viewed/DrawTitleMostViewed';
import './home.css';

const Home = () => (
  <>
    <SlideShow />
    <div className="banner-container">
      <div className="banner-container__first">
        <DrawTitleMostViewed />
        <MostViwedMovies />
      </div>
      <div className="banner-container__second">
        <h1>TEMP</h1>
        <MostViwedMovies />
      </div>
    </div>
  </>
);

export default Home;
