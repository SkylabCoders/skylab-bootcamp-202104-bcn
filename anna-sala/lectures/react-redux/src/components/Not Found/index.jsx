import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2>404 NOT FOUND... BYE</h2>
      <Link to="/">GO BACK</Link>
    </>
  );
}

export default NotFound;
