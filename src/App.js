import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Saludo from './components/Saludo';
import PopularMovies from './components/popularMovies';

function Home() {
  return <h1>Página de Inicio</h1>;
}

function Movies() {
  return <h1>This is a list of movies</h1>;
}

function App() {
  return (
    <Router>
      <nav>
          <Link to="/">WatchMeIfYouCan</Link>
          <Link to="/movies">Movies</Link>
      </nav>

      <br />
      <br />

    <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>


  );
}

export default App;
