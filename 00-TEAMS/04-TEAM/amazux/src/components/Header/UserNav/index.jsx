import React from 'react';
// import PropTypes from 'prop-types'

const UserNav = () => (
  <div className="navigation">
    <div className="navigation__img">
      <img src="../../images/amazon.jpg" alt="" />
    </div>
    <div className="navigation__search">
      <input type="text" placeholder="serach product" />
    </div>
  </div>

);

UserNav.propTypes = {

};

export default UserNav;
