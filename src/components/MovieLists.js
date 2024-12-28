import React, { useEffect, useState } from 'react';
import tmdbService from '../services/tmdbService';
import MovieList from './MovieList';

const MovieLists = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

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

    const loadUpcomingMovies = async () => {
      const upcoming = await tmdbService.getUpcomingMovies();
      // console.log(upcoming);
      setUpcomingMovies(upcoming || []);
    };

    // Cargar películas mejor valoradas al montar el componente
    loadPopularMovies();
    loadTopRatedMovies();
    loadUpcomingMovies();
  }, []);

  return (
    <div className='px-28 py-6 bg-gray-900'>
      <MovieList title="Popular Movies" movies={popularMovies} />  
      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default MovieLists;
