import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h2>
      Page couldn&apos;t be found
    </h2>
    <Link to="/">Back to safety</Link>
  </>

);

export default NotFound;
