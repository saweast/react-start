import React, {useEffect, useState} from 'react';

import Recipe from './components/Recipe';

import './App.css'

const App = () => {

  const APP_ID = 'f4f79653';
  const APP_KEY = 'd017efd168ae2ba9a97698fc6fb0e0bf';

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(exampleReq)
    const data = await response.json();
    setRecepies(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form 
        className="search-form"
        onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text" 
          onChange={updateSearch} 
          value={search}/>
        <button 
          className="search-button" 
          type="submit">
            Search
        </button>
      </form>
      {recepies.map((recipe) => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          image={recipe.recipe.image} 
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  )
}

export default App;