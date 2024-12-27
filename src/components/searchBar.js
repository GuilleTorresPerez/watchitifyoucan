import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/search?q=' + query);
    }
};

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg shadow-lg p-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie..."
        className="flex-1 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
