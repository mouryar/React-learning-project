import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let burgerIngredients = Object.keys(props.ingredients)
            .map(iKey => {
                return [...Array(props.ingredients[iKey])].map((_, index)=>{
                    return <BurgerIngredient type={iKey} key={iKey+index}></BurgerIngredient>
                })
            }).reduce((arr, el) => arr.concat(el), []);
    
    if (burgerIngredients.length === 0){
        burgerIngredients = <p>Please start adding ingredients</p>;
    }

    return(
        <div className= {classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {burgerIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;
