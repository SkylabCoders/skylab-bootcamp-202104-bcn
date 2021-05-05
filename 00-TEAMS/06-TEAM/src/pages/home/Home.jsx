import React from 'react';
import MostViwedMovies from '../../common/components/slider-most-viewed/MostViwedMovies';
import SlideShow from '../../common/components/slide-show/slideShow';
import DrawTitle from '../../common/components/title-sliders/title-last-releases/DrawTitle';

const Home = () => (
  <>
    <SlideShow />
    <MostViwedMovies />
    <DrawTitle />
  </>
);

export default Home;
