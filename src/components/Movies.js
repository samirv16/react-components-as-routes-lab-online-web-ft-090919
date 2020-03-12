import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => (
          <div key={idx}>
            <h2>Title: {movie.title}</h2>
            <p>Time: {movie.time} min.</p>
            <p>Genres: </p>
              <ul>
                {movie.genres.map((genre, idx) => (
                  <li key={idx}>{genre}</li>
                ))}
              </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
