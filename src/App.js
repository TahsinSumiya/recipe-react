
import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css'
function App() {
  const APP_ID = 'da359229';
  const API_KEY = '27cd90b61c1ccb2f872f09fc85b34f0e';
  // const example =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
 const [recepies,setRecepies]=useState([]);
 const [search,setSearch]=useState('');
 const[query,setQuery]=useState('chiken')

useEffect(()=>{
getRecepies()
},[query]);
  
const getRecepies = async ()=>{
const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)

const data = await res.json()
console.log(data.hits)
setRecepies(data.hits)
}
const searchevent = e =>{
  setSearch(e.target.value)
}
const getSearch =e =>{
  e.preventDefault()
  setQuery(search);
  setSearch('')
}
  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={searchevent}></input>
        <button className='search-button' type='submit'>search</button>
      </form>
      <div className='recipes'>
      {recepies.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
        
        />
      ))}
      </div>
    </div>
  )
}

export default App
