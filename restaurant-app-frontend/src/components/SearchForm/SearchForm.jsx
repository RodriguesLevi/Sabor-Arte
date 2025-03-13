import React, { useState } from 'react';
import { ERROR_MESSAGES } from '../../utils/constants';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setError(ERROR_MESSAGES.SEARCH_EMPTY);
      return;
    }
    
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <input
          type="text"
          className="search-form__input"
          placeholder="Buscar no menu..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-form__button">
          Buscar
        </button>
      </div>
      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;