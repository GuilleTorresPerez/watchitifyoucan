// src/components/MovieItem.js
import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieItem;
