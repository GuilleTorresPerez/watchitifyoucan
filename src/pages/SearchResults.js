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
    <div className="px-28 py-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className='flex flex-col gap-5'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <SearchMovieItem movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
