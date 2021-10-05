import React, {  useEffect, useState, useCallback } from 'react'; 
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'cf03e151'
  const APP_KEY = '073910b378a47fe58b7d631174d22bf6'

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');


const getRecipes = useCallback(async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
}, [query]);



// async () => {
//   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//   const data = await response.json();
//   setRecipes(data.hits);

// }

  //const [counter, setCounter] = useState(0);
  useEffect (() => {
    getRecipes();  
  }, [getRecipes]);
//added an empty array ,[] so the useeffect only renders once not everytime the page renders.


  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(''); //setting search back to empty string so searchbar becomes empty right after a search is submitted.
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories + " Calories"}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}     
        />
      ))}
      </div>
    </div>
  )
}


export default App;
