import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2>Nothing to see here...</h2>
      <Link to="/">Back to safety</Link>
    </>
  );
}

export default NotFound;
