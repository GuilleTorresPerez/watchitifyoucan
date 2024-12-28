import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbService from '../services/tmdbService';

const MovieInfo = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await tmdbService.getMovieDetails(id); // Llama al servicio para obtener los detalles
        setMovie(movieData);
        console.log('Movie:', movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
    
  }, [id]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-900 text-white px-28 py-6'>
      <div className='flex flex-col md:flex-row gap-10 w-full'>
        <div>
          <img
            className='w-[500px] rounded shadow-lg'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className='p-5 space-y-3'>
          <h1 className='text-3xl font-bold'>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}/10</p>
          <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
