import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadHeroesFromApi } from '../../redux/actions/actionCreator';

function HeroList({ dispatch, heroes }) {
  useEffect(() => {
    dispatch(loadHeroesFromApi());
  }, []);
  return (
    <ul>
      { // Comprobamos si la lista tiene algo o no
      heroes[0]?.map(({ name }) => <li><span>{name}</span></li>)
      }
    </ul>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes,
  };
}

export default connect(mapStateToProps)(HeroList);
