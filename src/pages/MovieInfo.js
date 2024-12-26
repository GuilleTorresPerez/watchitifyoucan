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
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}/10</p>
      <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
    </div>
  );
};

export default MovieInfo;
    