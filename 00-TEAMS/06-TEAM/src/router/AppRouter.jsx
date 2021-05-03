import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from '../application/components/layout/header/components/navigation/Navigation';
import LoginUser from '../pages/login/Login';
import Home from '../pages/home/Home';
import Films from '../pages/films/Films';
import TvShows from '../pages/tv-shows/Tv_shows';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/films" component={Films} />
      <Route exact path="/tv-shows" component={TvShows} />
      <Route exact path="/login" component={LoginUser} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
export default AppRouter;
