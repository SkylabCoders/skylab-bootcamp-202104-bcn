import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2>Nothing to see here</h2>
      <Link to="/components/Dashboard"> Back to safe</Link>
    </>
  );
}

export default NotFound;
