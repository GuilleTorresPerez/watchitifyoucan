import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Saludo from './Saludo';

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




      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
