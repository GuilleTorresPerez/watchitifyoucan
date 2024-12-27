// src/components/MovieItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} >
      <div className='w-[200px] h-[350px] flex flex-col items-center rounded-lg'>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
             alt={movie.title} 
             className='w-full h-[300px] object-cover rounded-lg'/>
        <h3 className="text-center text-sm font-medium p-2 truncate">
          {movie.title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieItem;
