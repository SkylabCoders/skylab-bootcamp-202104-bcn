import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loadCurriculum from '../../redux/actions/actionCreators';

function Header({ dispatch, curriculum }) {
  useEffect(() => {
    if (!curriculum) dispatch(loadCurriculum());
  }, []);

  return (
    <>
      <nav className="main-navigator">
        <ul className="">
          <li>Logo</li>
          <li>About</li>
          <li>Education</li>
          <li>Experiences</li>
          <li>Skills</li>
        </ul>
      </nav>
    </>
  );
}

Header.propTypes = {
  curriculum: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(Header);
