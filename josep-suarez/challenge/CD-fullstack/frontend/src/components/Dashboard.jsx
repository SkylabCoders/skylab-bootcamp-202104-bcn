import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Link to="/study">Formación</Link>
      <Link to="/works">Experiencia</Link>
      <Link to="/language">Language</Link>
    </>
  );
}

export default Dashboard;
