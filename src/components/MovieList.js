// src/components/MovieList.js
import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movie-list">
      {movies.results?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  );
};

export default MovieList;
