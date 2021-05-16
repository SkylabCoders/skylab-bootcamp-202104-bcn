import React from 'react';
import Link from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Link to="/study">Formación</Link>
      <Link to="/works">Experiencia</Link>
      <Link to="/others">Otros datos</Link>
    </>
  );
}

export default Dashboard;
