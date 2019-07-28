import React, { useContext } from 'react';

import { MovieContext } from './MovieContext';

const Nav = ({name, price, id}) => {

  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div key={id}>
      
      <h3>Test</h3>
      <p>List: { movies.length }</p>
    </div>
  );
}

export default Nav