import React from 'react';
import SearchBar from './style';

const Searcher = () => (
  <SearchBar>
    <div className="form-group">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search_movie" className="text-white" />
      <input
        type="text"
        className="form-control"
        id="search_movie"
        value="interestelar"
      />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="btn btn__primary" />
    </div>
  </SearchBar>
);

export default Searcher;
