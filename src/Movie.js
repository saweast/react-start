import React, {useState} from 'react';

const Movie = ({name, price, id}) => {


  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Movie