import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <h3>Nothing to see here</h3>
    <Link to="/">Back so safety</Link>
  </div>
);

export default NotFound;
