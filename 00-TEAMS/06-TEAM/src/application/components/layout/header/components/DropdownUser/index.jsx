import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const UserMenu = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="Menu">
      <div className="m-item m-logo" onClick={() => setOpenMenu(!openMenu)}>
        Menu
      </div>
      <div className={setClassNames(1)}>
        Dashboard
      </div>
      <div className={setClassNames(2)}>
        Settings
      </div>
      <div className={setClassNames(3)}>
        Sign out
      </div>
    </div>
  );
};

export default withRouter(UserMenu);
