import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const UserNav = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (searchInput) {
      const searchString = searchInput
        .trim()
        .toLowerCase()
        .replace(' ', '-');
      history.push(`/search/${searchString}`);
      setSearchInput('');
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation__content-img">
        <Link to="/">
          <div className="navigation__img" />
        </Link>
      </div>

      <div className="navigation__location">
        <div className="navigation__location-img" />
        <div className="navigation__direction">
          <div className="navigation__location-name">Enviar a Joseluis</div>
          <div className="navigation__location-adress">Calle falsa 123</div>
        </div>

      </div>
      <div className="navigation__search">
        <input type="text" placeholder="Search product" value={searchInput} onChange={handleSearchInputChange} />
        <button type="button" onClick={handleSearch} disabled={!searchInput}>Buscar</button>
      </div>
      <div className="navigation__user-login">
        <Link to="/">
          <div className="navigation__login" />
        </Link>
      </div>

      <div className="navigation__devolution">
        Devoluciones y pedidos
      </div>
      <div className="navigation__cart">
        <button type="button"> </button>
        <span className="navigation__cart-number">3</span>
      </div>
    </nav>
  );
};

export default UserNav;
