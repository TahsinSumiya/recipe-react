import React from 'react'
import style from './recipe.module.css'
export default function recipe({title,calories,image,ingredients}) {
  return (
    <div className={style.recipe}>
        
      <h1 >{title}</h1>
      <ul>
        
            {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
            ))}
       
      </ul>
      <p> Calories : {calories}</p>
      <img className={style.image} src={image}></img>
    </div>
  )
}
