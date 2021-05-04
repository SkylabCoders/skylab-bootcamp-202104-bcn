import React from 'react';
import { Link } from 'react-router-dom';

const Anchorates = ({ text, to = 'null' }) => (
  <Link to={to}>{text}</Link>
);

export default Anchorates;
