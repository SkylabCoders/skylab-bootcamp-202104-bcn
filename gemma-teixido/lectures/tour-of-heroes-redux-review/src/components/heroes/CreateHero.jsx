import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createHero } from '../redux/actions/actionCreator';

const CreateHero = () => {
  const [heroName, setHeroName] = useState(null);
  const handleNameChange = (event) => {
    setHeroName(event.target.value);
  };

  useEffect(() => {
    setHeroName(hero?.heroName);
  }, [hero]);

  function dispatchCreateHero() {
    dispatch(createHero(hero));
  }

  return (
    <>
      <h2>Create New Hero</h2>
      <label htmlFor="hero-name">
        Hero name:
        <input type="text" id="heroName" onChange={handleNameChange} placeholder="Enter New Hero Name" />
      </label>
      <button onClick={dispatchCreateHero}>Create Hero</button>
    </>
  );
};

function mapStateToProps({ hero }) {
  return (
    hero
  );
}

createHero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CreateHero);
