import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import './home.css';

const Home = () => (
  <>
    <SlideShow />
    <div className="banner-container">
      <div className="banner-container__first">
        <h1>TEMP</h1>
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
