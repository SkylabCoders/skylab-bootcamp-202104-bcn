import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Layout/Header/components/Navigation/Navigation';
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import Blog from '../../pages/Blog/Blog';
import { Head, Container } from './styles';
import Login from '../../pages/Login/Login';

const AppRouter = () => (
  <>
    <Router>
      <Head>
        <Container>
          <Navigation />
        </Container>
      </Head>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </>

);

export default AppRouter;
