import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function HeroListItemComponent({ id, name }) {
  return (

    <li className="list__hero-item">
      <Link to={`heroes/${id}`}>
        {name}
      </Link>
    </li>

  );
}

HeroListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};

export default HeroListItemComponent;

// // {hero.superhero}
// {
//   showStatus
//     && (
//     <div>
//       <ul>
//         <li>Publisher:</li>
//         <li>Alterego:</li>
//       </ul>
//       <Link to={`./../heroes/${hero.id}`} />
//     </div>
//     );
// }
