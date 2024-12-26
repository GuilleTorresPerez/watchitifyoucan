import React, { useEffect, useState } from 'react';
import tmdbService from '../services/tmdbService';
import MovieList from './MovieList';

const MovieLists = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Cargar películas populares al montar el componente
  useEffect(() => {
    const loadMovies = async () => {
      const popular = await tmdbService.getPopularMovies();
      // console.log(popular);
      setPopularMovies(popular || []);
    };
    loadMovies();
  }, []);

  // Manejo de búsqueda
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;

    try {
      const results = await tmdbService.searchMovies(searchQuery);
      setSearchResults(results.results || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (

    <MovieList title="Popular Movies" movies={popularMovies} />  
    //   {/* Buscador */}
    //   <form onSubmit={handleSearch}>
    //     <input
    //       type="text"
    //       value={searchQuery}
    //       onChange={(e) => setSearchQuery(e.target.value)}
    //       placeholder="Search for a movie..."
    //     />
    //     <button type="submit">Search</button>
    //   </form>

    //   {/* Condicionar la visualización de listas */}
    //   {searchResults.length > 0 ? (
    //     <MovieList title="Search Results" movies={searchResults} />
    //   ) : (
    //     <MovieList title="Popular Movies" movies={popularMovies} />
    //   )}
    // </div>
  );
};

export default MovieLists;
