import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import DrawTitleMostViewed from '../../common/components/title-sliders/title-most-viewed/DrawTitleMostViewed';
import DrawTitleLastReleases from '../../common/components/title-sliders/title-last-releases/DrawTitleLastReleases';
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
        <DrawTitleLastReleases />
        <MostViwedMovies />
      </div>
    </div>
  </>
);

export default Home;
