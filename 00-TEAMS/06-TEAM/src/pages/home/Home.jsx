import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import DrawTitleMostViewed from '../../common/components/title-sliders/title-most-viewed/DrawTitleMostViewed';
import DrawTitleLastReleases from '../../common/components/title-sliders/title-last-releases/DrawTitleLastReleases';
import DrawTitleMostValued from '../../common/components/title-sliders/title-most-valued/DrawTitleMostValued';
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
        <DrawTitleLastReleases />
        <MostViwedMovies type={TYPE_PARAMS.upcoming} />
      </div>
      <div className="banner-container__second">
        <DrawTitleMostValued />
        <MostViwedMovies type={TYPE_PARAMS.topRated} />
      </div>
    </div>
  </>
);

export default Home;
