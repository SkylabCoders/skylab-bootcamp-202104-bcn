/* eslint-disable no-debugger */
import React from 'react-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import loadPokemons from '../../redux/actions/actionCreator';

function PokeList({ dispatch, pokemons }) {
  debugger;
  useEffect(() => {
    dispatch(loadPokemons());
  }, []);
  return (
    <ul>
      {
            pokemons.length && pokemons[0]?.map(({ name, url }) => (
              <li key={url}>
                <span>{name}</span>
              </li>
            ))
        }
    </ul>

  );
}

PokeList.propTypes = {
  pokemons: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
  };
}

export default connect(mapStateToProps)(PokeList);
