import React from 'react';
import style from './recipe.module.css';

//passed down information from App.js here usig the props in the curly braces.
const Recipe = ({title, calories, image, ingredients }) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;