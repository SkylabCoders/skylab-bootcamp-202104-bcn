import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTask } from '../common/actions/actionCreators';

const Dashboard = ({ tasks, dispatch }) => {
  const [taskName, setTaskName] = useState();

  useEffect(() => {
    if (!taskName.length) dispatch(getTask());
  }, []);

  return (
    <div className="heroes-menu">
      {tasks.slice(1, 5).map((hero) => <Link key={hero.id} to={`/detail/${hero.id}`}>{hero.name}</Link>)}
    </div>
  );
};

export default connect(mapStateToProps)(Dashboard);
