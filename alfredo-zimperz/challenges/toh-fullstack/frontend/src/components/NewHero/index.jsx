import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { addHero } from '../../redux/actions/actionCreators';

const NewHero = ({ actions }) => {
  const [newHeroName, setNewHeroName] = useState('');
  const handleChange = ({ target: { value } }) => {
    setNewHeroName(value);
  };
  const handleSaveHero = () => {
    actions.addHero({ name: newHeroName });
  };
  return (
    <div>
      <input type="text" value={newHeroName} onChange={handleChange} />
      <button type="button" onClick={handleSaveHero}>Save</button>
    </div>
  );
};

NewHero.propTypes = {
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { addHero },
      dispatch,
    ),
  };
}

export default connect(null, mapDispatchToProps)(NewHero);
