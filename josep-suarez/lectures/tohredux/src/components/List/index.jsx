/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteHero } from '../../redux/actions/actionCreators';

function ListHeroes({ dispatch, heroes }) {
  // const [newHeroes, setHeroesNow] = useState(heroes);

  // useEffect(() => {
  //   setHeroesNow();
  // }, [newHeroes]);

  function deleteSelect(heroId) {
    console.log(heroId);
    dispatch(deleteHero(heroId));
  }
  return (
    <>
      <button type="button">Add</button>
      {heroes.map((hero) => (
        <li>
          <Link to={`/detail/${hero.id}`}>{`${hero.id}-${hero.name}`}</Link>
          <button type="button" onClick={() => deleteSelect(hero.id)}>Delete</button>
          <button type="button">Modify</button>
        </li>
      ))}
    </>
  );
}
ListHeroes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  heroes: PropTypes.shape([]).isRequired
};
function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(ListHeroes);
