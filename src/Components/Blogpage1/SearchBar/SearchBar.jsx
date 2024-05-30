import React from 'react';
import './SearchBar.css';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <div className='input-close'>
        <input
          type='text'
          placeholder='Search..'
          value={value}
          onChange={handleSearchKey}
        />
        {value && <CloseIcon onClick={clearSearch}/>}
      </div>
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;