import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './HeroList.css';
import { deleteHero } from '../../redux/actions/actionCreators';

function HeroList({ heroes, dispatch }) {
  function deleteHeroSelected(heroId) {
    dispatch(deleteHero(heroId));
  }

  return (
    <>
      <div>
        {heroes.map((hero) => (
          <li>
            <Link to={`/detail/${hero.id}`}>{hero.name}</Link>
            ,
            <button type="button" onClick={() => deleteHeroSelected(hero.id)}>Delete</button>
          </li>
        ))}
      </div>
    </>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(HeroList);
