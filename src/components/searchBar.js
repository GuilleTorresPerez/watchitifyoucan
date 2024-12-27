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
    <form onSubmit={handleSubmit} className='bg-[rgb(33,53,85)] rounded-l-lg'>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie..."
        className="flex-1 bg-[rgb(33,53,85)] rounded-lg focus:outline-none border-b-2 border-transparent focus:border-[rgb(62,88,121)]"
      />
      <button
        type="submit"
        className="p-2 bg-[rgb(33,53,85)] text-white rounded-r-lg hover:bg-[rgb(62,88,121)] focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
