import React from 'react';

function ResultList({ title, movies }) {
    
  return (
    <div>
      <h2>{title}</h2>
      <div className="movie-list">

        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultList;
