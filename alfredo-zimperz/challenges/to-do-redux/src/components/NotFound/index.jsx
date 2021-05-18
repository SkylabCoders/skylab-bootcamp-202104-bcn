import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <Link to="/">Go back to dashboard</Link>
  </div>
);

export default NotFound;
