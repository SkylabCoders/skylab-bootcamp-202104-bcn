import React from 'react';
import LIST from '../constant/coolThings';

const ShowList = () => (
  <div className="Task">
    <ul>
      {
                LIST.map((x) => (
                  <li>
                    {x.id}
                    { ' ' }
                    { x.task }
                  </li>
                ))
    }
    </ul>
  </div>
);
export default ShowList;
