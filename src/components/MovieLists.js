import React, { useEffect, useState } from 'react';
import tmdbService from '../services/tmdbService';
import MovieList from './MovieList';

const MovieLists = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  // Cargar películas populares al montar el componente
  useEffect(() => {
    const loadMovies = async () => {
      const popular = await tmdbService.getPopularMovies();
      // console.log(popular);
      setPopularMovies(popular || []);
    };
    loadMovies();
  }, []);

  return (

    <MovieList title="Popular Movies" movies={popularMovies} />  
    
  );
};

export default MovieLists;
