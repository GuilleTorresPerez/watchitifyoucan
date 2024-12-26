import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import PopularMovies from './components/popularMovies';
import tmdbService from './services/tmdbService';
import MovieList from './components/MovieList';
import MovieLists from './components/MovieLists';
import SearchBar from './components/searchBar';

function Home() {
  return <MovieLists />;
}

function Movies() {
  return <h1>This is a list of movies</h1>;
}

function App() {

  const onSearch = async (query) => {

    if (!query) return;

    try {
      const results = await tmdbService.searchMovies(query);
      console.log(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };



  return (
    <Router>
      <nav>
          <Link to="/">WatchMeIfYouCan</Link>
          <Link to="/movies">Movies</Link>
      </nav>

      <br />
      <br />

      <SearchBar onSearch={onSearch}/>


      {/* <MovieList title="Popular Movies" movies={popularMovies} /> */}

    <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>


  );
}

export default App;
