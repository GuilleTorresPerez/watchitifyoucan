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
      <header class="flex justify-between items-center bg-[rgb(33,53,85)] text-white px-28 py-6 gap-12 text-xl">
        <nav class="flex gap-12 text-xl items-center font-bold">
          <Link to="/">
            <img class="w-16 h-auto" src="/logo.png" alt="WatchMeIfYouCan" />
          </Link>
          <Link to="/">WatchItIfYouCan</Link>
          <Link to="/">Home</Link>
          <Link to="/">Movies</Link>
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