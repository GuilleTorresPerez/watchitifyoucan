import React, { useEffect, useState } from 'react';
import tmdbService from '../services/tmdbService';
import MovieList from './MovieList';

const MovieLists = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // Cargar películas populares al montar el componente
  useEffect(() => {
    const loadPopularMovies = async () => {
      const popular = await tmdbService.getPopularMovies();
      // console.log(popular);
      setPopularMovies(popular || []);
    };

    const loadTopRatedMovies = async () => {
      const topRated = await tmdbService.getTopRatedMovies();
      // console.log(topRated);
      setTopRatedMovies(topRated || []);
    };

    // Cargar películas mejor valoradas al montar el componente
    loadPopularMovies();
    loadTopRatedMovies();
  }, []);

  return (
    <div>
      <MovieList title="Popular Movies" movies={popularMovies} />  
      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
    </div>
  );
};

export default MovieLists;
