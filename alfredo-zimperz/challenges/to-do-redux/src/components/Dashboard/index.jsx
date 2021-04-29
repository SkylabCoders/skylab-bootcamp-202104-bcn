import React, { useEffect } from 'react';
import { loadBooks } from '../../actions/actionCreators';

const Dashboard = () => {
  useEffect(() => {
    loadBooks();
  }, []);

  const title = 'Dashboard';
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Dashboard;
