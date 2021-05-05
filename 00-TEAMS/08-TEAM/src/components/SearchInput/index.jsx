import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import magnifying from '../../assets/magnifying-pic.png';

function SearchInput() {
  const [newSearch, setNewSearch] = useState('');

  return (
    <>
      <form>
        <label htmlFor="search-input">
          <input
            id="search-input"
            placeholder="Search country"
            onChange={(event) => setNewSearch(event.target.value)}
          />
          <button
            type="button"
          >
            <Link
              to={`/country/${newSearch}`}
            >
              <img src={magnifying} alt="icon" />
            </Link>
          </button>
        </label>
      </form>
    </>
  );
}

export default SearchInput;
