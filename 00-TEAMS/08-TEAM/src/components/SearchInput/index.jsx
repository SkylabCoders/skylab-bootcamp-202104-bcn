/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchInput() {
  const newInput = document.getElementById('search-input');

  const [newSearch, setNewSearch] = useState('');

  function getValue() {
    setNewSearch(newInput.value);
  }

  return (
    <>
      <form>
        <label htmlFor="search-input">
          Search by country:
          <input
            id="search-input"
            placeholder="Search country"
            onChange={() => getValue()}
          />
          <button
            type="button"
          >
            <Link
              to={`/country/${newSearch}`}
            >
              Search country
            </Link>
          </button>
        </label>
      </form>
    </>
  );
}

export default SearchInput;
