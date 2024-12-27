// src/components/MovieList.js
import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto gap-8">
      {movies.results?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  );
};

export default MovieList;
