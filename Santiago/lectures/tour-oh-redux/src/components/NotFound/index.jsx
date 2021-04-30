import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>ERROR 404</h1>
      <Link to="/">Back to safety</Link>
    </>
  );
}
export default NotFound;
