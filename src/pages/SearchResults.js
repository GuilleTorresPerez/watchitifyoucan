import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // Importar useSearchParams
import tmdbService from '../services/tmdbService';
import SearchMovieItem from '../components/SearchMovieItem';

const SearchResults = () => {
  const [searchParams] = useSearchParams(); // Obtener los parámetros de búsqueda
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q'); // Obtener el valor de "q"

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const results = await tmdbService.searchMovies(query); // Buscar películas usando el servicio
          setMovies(results.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      fetchMovies();
    }
  }, [query]); // Ejecutar el efecto cuando cambie la query

  if (!query) {
    return <p>Please enter a search query.</p>;
  }

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <SearchMovieItem movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
