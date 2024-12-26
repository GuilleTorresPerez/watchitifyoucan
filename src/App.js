import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import PopularMovies from './components/popularMovies';
import tmdbService from './services/tmdbService';
import MovieList from './components/MovieList';
import MovieLists from './components/MovieLists';
import SearchBar from './components/searchBar';
import ResultList from './components/ResultList';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">WatchMeIfYouCan</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <SearchBar />
      </header>
      <Routes>
        <Route path="/" element={<MovieLists />} />
        <Route path="/search" element={<ResultList />} />
      </Routes>
    </Router>
  );
}

export default App;