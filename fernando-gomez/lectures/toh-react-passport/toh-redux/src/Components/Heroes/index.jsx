/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import HeroSearch from '../HeroSearch';
import { deleteHero, loadHeroes, addHero } from '../../redux/actions/actionCreator';
import './form.css';

const Heroes = ({ heroes, dispatch }) => {
  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, [heroes.length]);

  const [newHeroName, setNewHeroName] = useState('');

  const handleDelete = (heroId) => {
    dispatch(deleteHero(heroId));
  };

  const handleAdd = () => {
    let newId = 1;

    if (heroes.length !== 0) newId = heroes[heroes.length - 1].id + 1;

    const newHero = {
      id: newId,
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
        className="new-hero"
      />
      <button className="add-button" type="button" onClick={() => handleAdd()}>Add</button>
      {heroes.map((hero) => (
        <ul>
          <Link className="badge" to={`/detail/${hero._id}`}>
            {hero.id}
            {' '}
            {hero.name}
          </Link>
          <button onClick={() => handleDelete(hero._id)} type="button">X</button>
        </ul>
      ))}
    </>
  );
};

Heroes.propTypes = {
  heroes: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  heroes: store.heroes,
});

export default connect(mapStateToProps)(Heroes);
