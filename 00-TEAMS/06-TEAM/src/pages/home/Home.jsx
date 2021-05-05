import React from 'react';
import SlideShow from '../../common/components/slide-show/slideShow';
import MostViwedMovies from '../../common/components/slider-most-viewed/index';
import Upcoming from '../../common/components/slider-upcoming/index';

const Home = () => (
  <>
    <SlideShow />
    <MostViwedMovies />
    <Upcoming />
  </>
);

export default Home;
