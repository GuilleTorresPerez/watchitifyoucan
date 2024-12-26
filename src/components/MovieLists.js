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
    
  );
};

export default MovieLists;
