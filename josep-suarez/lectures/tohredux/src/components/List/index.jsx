/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteHero, addHero } from '../../redux/actions/actionCreators';

function ListHeroes({ dispatch, heroes }) {
  function deleteSelect(heroId) {
    dispatch(deleteHero(heroId));
  }
  function newHero() {
    const inputHero = document.getElementById('inputNew');
    const heroNew = { id: (heroes[heroes.length - 1].id + 1), name: inputHero.value };
    dispatch(addHero(heroNew));
  }
  return (
    <>
      <input type="text" id="inputNew" />
      <button type="button" onClick={() => newHero()}>Add</button>
      {heroes.map((hero) => (
        <li>
          <Link to={`/detail/${hero.id}`}>{`${hero.id}-${hero.name}`}</Link>
          <button type="button" onClick={() => deleteSelect(hero.id)}>Delete</button>
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
