import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Saludo from './components/Saludo';
import PopularMovies from './components/popularMovies';
import tmdbService from './services/tmdbService';
import MovieList from './components/MovieList';

function Home() {
  return <h1>Página de Inicio</h1>;
}

function Movies() {
  return <h1>This is a list of movies</h1>;
}

function App() {

  const [popularMovies, setPopularMovies] = useState([]);
  //const [topRatedMovies, setTopRatedMovies] = useState([]);
  //const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const popular = await tmdbService.getPopularMovies();
      //const topRated = await tmdbService.getTopRatedMovies();
      //const upcoming = await tmdbService.getUpcomingMovies();
      
      setPopularMovies(popular);
      //setTopRatedMovies(topRated);
      //setUpcomingMovies(upcoming);
    };

    loadMovies();
  }, []);


  return (
    <Router>
      <nav>
          <Link to="/">WatchMeIfYouCan</Link>
          <Link to="/movies">Movies</Link>
      </nav>

      <br />
      <br />

      <MovieList title="Popular Movies" movies={popularMovies} />

    <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>


  );
}

export default App;
