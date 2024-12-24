import { useState } from 'react';
import tmdbService from '../services/tmdbService';

const loadPopularMovies = async () => {
    try {
      const movies = await tmdbService.getPopularMovies(1);
      console.log('Popular Movies:', movies.results);
    } catch (error) {
      console.error('Error loading popular movies:', error);
    }
  };

function popularMovies(props) {
    // const [contador, setContador] = useState(0);


    return (
        <div>
            <h1>Popular movies</h1>
            <button onClick={loadPopularMovies}>
                Load popular movies
            </button>

        </div>
    );
}

export default popularMovies;