import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import Heroes from '../assets/Heroes';

function ListItemComponent({
  superhero, id
}) {
  // const [count, setCount] = useState(false);
  return (
    <li className={`list__hero-item-${id}`}>
      <span>
        <Link className="list__hero-item--link" to={`/heroes/${id}`}>View more</Link>
      </span>
      {superhero}

    </li>
  );
}

ListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired

};

export default ListItemComponent;
