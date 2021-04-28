import React from 'react';
import PropTypes from 'prop-types';
import {
  Link

} from 'react-router-dom';
import { useParams } from 'react-router';
import InfoHeroComponent from './InfoHeroComponent';

function ListItemComponent({
  superhero, id, alterEgo, publisher
}) {
  const { heroId } = useParams();
  return (
    <div>
      <li className={`list__hero-item-${id}`}>
        <span>
          <Link className="list__hero-item--link" to={`/heroes/${id}`}>View more</Link>
        </span>
      </li>
      {!heroId ? (
        <InfoHeroComponent name={superhero} alterEgo={alterEgo} publisher={publisher} />
      ) : (
        null
      )}
    </div>

  );
}

ListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alterEgo: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired

};

export default ListItemComponent;
