import React, {useState, createContext} from 'react';
import { tsPropertySignature } from '@babel/types';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124,
    },
    {
      name: 'GOT',
      price: '$10',
      id: 231214,
    },
    {
      name: 'Inseption',
      price: '$10',
      id: 2312114,
    },
  ])
  
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}