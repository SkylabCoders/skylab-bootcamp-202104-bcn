import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../pages/login/Login';
import DashboardRoutes from './dashboardRoutes';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={DashboardRoutes} />
    </Switch>
  </Router>
);
export default AppRouter;
