import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import '../css/SearchBar.css';
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="div-search-outter">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="search-field" className="search-label">
          Search all files
        </label>
        <div className='div-search'
          style={{
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
            // paddingLeft: '14rem',
          }}
        >
          <FiSearch aria-hidden="true" className="search-icon" />
          <input
            name="search-field"
            autoComplete="off"
            id="search-field"
            className="search-input"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <Link className="button-sign" style={{ marginRight: '6rem' }} to="/signin">
        Sign In
      </Link>

      </div>
  );
};

export default Searchbar;
