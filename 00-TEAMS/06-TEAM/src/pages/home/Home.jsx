import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import DrawTitleMostViewed from '../../common/components/title-sliders/title-most-viewed/DrawTitleMostViewed';

const Home = () => (
  <>
    <SlideShow />
    <DrawTitleMostViewed />
    <MostViwedMovies />
  </>
);

export default Home;
