import React from 'react';
import { Link } from 'react-router-dom';

const SearchMovieItem = ({ movie }) => {
    console.log('movie item');
    return (
        <div className="movie-item">
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            </Link>
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
        </div>
    );
};

export default SearchMovieItem;