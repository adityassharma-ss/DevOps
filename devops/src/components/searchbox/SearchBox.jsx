import React, { useState } from 'react';
import SearchBox from './SearchBox.scss';
import NavBar from '../navbar/NavBar';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          onSearch(e);
        }}
      />
    </form>
  );
};

export default Search;
