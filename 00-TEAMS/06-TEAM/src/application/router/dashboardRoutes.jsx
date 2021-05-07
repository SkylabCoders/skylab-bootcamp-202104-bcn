import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/layout/header/components/navigation/Navigation';
import Home from '../../pages/home/Home';
import Films from '../../pages/films/Films';
import TvShows from '../../pages/tv-shows/Tv_shows';
import MovieDetails from '../../pages/movie-details/MovieDetails';

const DashboardRoutes = () => (
  <>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/tv-shows" component={TvShows} />
        <Route path="/detail/:movieId" component={MovieDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  </>
);

export default DashboardRoutes;
