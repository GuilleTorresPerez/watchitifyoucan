import React from 'react';
import { Link } from 'react-router-dom';

const SearchMovieItem = ({ movie }) => {
    return (
        <div className="flex items-start border w-auto h-[200px] border-gray-300 p-3 rounded shadow-sm bg-white">
            <Link to={`/movie/${movie.id}`} className='flex-shrink-0'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} 
                className='h-[176px] w-auto aspect-[2/3] object-cover rounded-lg'/>
            </Link>
            <div className="ml-3 flex flex-col overflow-hidden gap-4">
                <Link to={`/movie/${movie.id}`}>
                    <h3 className="text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                        {movie.title}
                    </h3>
                </Link>
                <div className='flex flex-col'>
                    <h4 className="text-sm font-medium overflow-hidden text-ellipsis whitespace-normal line-clamp-4 ">
                        {movie.overview}
                    </h4>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default SearchMovieItem;