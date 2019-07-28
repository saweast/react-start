import React, { useContext } from 'react';

import Movie from './Movie';
import { MovieContext } from './MovieContext'

const MovieList = () => {

  const [movies, setMovies] = useContext(MovieContext);

  return (
    <ul>
      {movies.map(movie => (
        <Movie name={ movie.name } price={ movie.price } key={ movie.id } />
      ))}
    </ul>
  );
}

export default MovieList