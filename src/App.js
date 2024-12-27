import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
// import PopularMovies from './components/popularMovies';
import MovieLists from './components/MovieLists';
import SearchBar from './components/searchBar';
import ResultList from './pages/SearchResults';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">WatchMeIfYouCan</Link>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <SearchBar />
      </header>
      <Routes>
        <Route path="/" element={<MovieLists />} />
        <Route path="/search" element={<ResultList />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </Router>
  );
}

export default App;