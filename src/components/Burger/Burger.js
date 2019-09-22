import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngridients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
      .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey}/>)
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    });

    if(transformedIngridients.length === 0) {
      transformedIngridients = <p>Please add ingridients</p>
    }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngridients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;