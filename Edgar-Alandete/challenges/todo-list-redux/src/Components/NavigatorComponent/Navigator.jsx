import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav>
      <Link to="/">All tasks</Link>
      <Link to=" ">Backlog</Link>
      <Link to=" ">Doing</Link>
      <Link to=" ">On Review</Link>
      <Link to=" ">Done</Link>
      <Link to=" ">Blocking</Link>
    </nav>
  );
}
