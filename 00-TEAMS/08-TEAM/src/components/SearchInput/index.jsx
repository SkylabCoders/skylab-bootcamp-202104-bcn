import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchInput() {
  const [newSearch, setNewSearch] = useState('');

  return (
    <>
      <form>
        <label htmlFor="search-input">
          Search by country:
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
              Search country
            </Link>
          </button>
        </label>
      </form>
    </>
  );
}

export default SearchInput;
