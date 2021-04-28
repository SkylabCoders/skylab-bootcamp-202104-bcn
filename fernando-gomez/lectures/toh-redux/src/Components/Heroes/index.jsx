import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import HeroSearch from '../HeroSearch';
import { deleteHero, loadHeroes, addHero } from '../../redux/actions/actionCreator';

const Heroes = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  const [newHeroName, setNewHeroName] = useState('');

  const handleDelete = (heroId) => {
    dispatch(deleteHero(heroId));
  };

  const handleAdd = () => {
    const newHero = {
      id: heroes[heroes.length - 1].id + 1,
      name: newHeroName,
    };
    dispatch(addHero(newHero));
  };

  const handleNameChange = (event) => {
    setNewHeroName(event.target.value);
  };

  return (
    <>
      <h2>Top heroes</h2>
      <HeroSearch
        onChange={handleNameChange}
      />
      <button type="button" onClick={() => handleAdd()}>Add</button>
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
