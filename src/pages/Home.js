import React from 'react';
import MovieLists from '../components/MovieLists';
import ResultList from './SearchResults';

const Home = ({ searchResults, isSearching }) => {
  return (
    <main>
      {searchResults.length > 0 ? (
        <ResultList title="Search Results" movies={searchResults} />
      ) : (
        !isSearching && <MovieLists /> // Muestra listas populares si no hay búsqueda.
      )}
    </main>
  );
};

export default Home;
