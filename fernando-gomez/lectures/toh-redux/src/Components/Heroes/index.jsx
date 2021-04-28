import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import HeroSearch from '../HeroSearch';
import { deleteHero, loadHeroes } from '../../redux/actions/actionCreator';

const Heroes = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  const handleDelete = (heroId) => {
    dispatch(deleteHero(heroId));
  };

  return (
    <>
      <h2>Top heroes</h2>
      <HeroSearch />
      {heroes.map((hero) => (
        <>
          <Link to={`/detail/${hero.id}`}>
            {hero.id}
            {' '}
            {hero.name}
          </Link>
          <button onClick={() => handleDelete(hero.id)} type="button">X</button>
        </>
      ))}
    </>
  );
};

Heroes.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  heroes: store.heroes,
});

export default connect(mapStateToProps)(Heroes);
