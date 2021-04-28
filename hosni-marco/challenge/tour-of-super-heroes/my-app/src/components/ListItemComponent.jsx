import React from 'react';
// import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import {
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import InfoHeroComponent from './InfoHeroComponent';
// import Heroes from '../assets/Heroes';

function ListItemComponent({
  superhero, id
}) {
  // const { heroId } = useParams();
  // const searchHero = Heroes.find((hero) => hero.id === heroId);

  return (
    <div>
      <li className={`list__hero-item-${id}`}>

        <Link className="list__hero-item--link" to={`/heroes/${id}`}>View more</Link>

        {superhero}
      </li>
      {

        <Switch>
          {/* <Route extact path="/heroes/:heroId" component={DetailHeroComponent} /> */}
          <Route extact path="/heroes/:heroId" component={InfoHeroComponent} />
          <Redirect to="/heroes" />
        </Switch>

      }

      {/* {heroId !== undefined ? (
        <InfoHeroComponent name={superhero} alterEgo={alterEgo} publisher={publisher} />
      ) : (
        null
      )} */}
    </div>

  );
}

ListItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired
  // alterEgo: PropTypes.string.isRequired,
  // publisher: PropTypes.string.isRequired

};

export default ListItemComponent;
