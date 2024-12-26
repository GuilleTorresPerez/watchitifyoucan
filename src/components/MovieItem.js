// src/components/MovieItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-item">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieItem;
