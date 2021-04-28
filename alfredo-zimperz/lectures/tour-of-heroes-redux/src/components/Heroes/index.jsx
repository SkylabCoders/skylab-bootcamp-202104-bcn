import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './heroes.css';
import { loadHeroes, addHero, deleteHero } from '../../redux/actions/actionCreators';

const Heroes = ({ heroes, dispatch }) => {
  const [newHeroName, setNewHeroName] = useState();

  useEffect(() => {
    if (!heroes.length) dispatch(loadHeroes());
  }, []);

  const handleChangeInput = (event) => setNewHeroName(event.target.value);
  const saveNewHero = () => {
    if (newHeroName) {
      dispatch(addHero(newHeroName));
    }
  };
  const handleDelete = (id) => dispatch(deleteHero(id));

  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label htmlFor="new-hero" id="new-hero">
          Hero name:
          <input
            htmlFor="new-hero"
            value={newHeroName}
            onChange={handleChangeInput}
          />
        </label>
        <button className="add-button" type="button" onClick={saveNewHero}>
          Add hero
        </button>
      </div>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {' '}
              {hero.name}
            </Link>
            <button
              className="delete"
              title="delete hero"
              type="button"
              onClick={() => handleDelete(hero.id)}
            >
              x
            </button>
          </li>
        ))}

      </ul>
    </>
  );
};

Heroes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  heroes: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ heroes }) {
  return { heroes };
}

export default connect(mapStateToProps)(Heroes);
