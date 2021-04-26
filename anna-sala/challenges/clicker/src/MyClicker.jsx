import React from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';

function MyClicker({ handleClick }) {
  return (
    <>
      <button type="button" onClick={handleClick('a')}>PushMe</button>
    </>
  );
}
// }
MyClicker.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MyClicker;
