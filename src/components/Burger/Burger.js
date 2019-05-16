import React from 'react';
import styles from './Burger.module.scss';
import Burgeringredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) //Converting a ingredient object into array
    .map(igKey => {
        return[...Array(props.ingredients[igKey])].map((_, i) =>{
          return <Burgeringredient key={igKey + i } type={igKey} />
        });
    })
    // here we are converting 4 arrays in to single loop
    .reduce((arr,el)=>{
      return arr.concat(el);
    },[]);
    if(transformedIngredients.length === 0)
    {
      transformedIngredients = <p>Please Start Adding ingredients!</p>
    }
    console.log("transformedIngredient coming from burger.js",transformedIngredients);
  return(
<div className={styles.Burger}>
<Burgeringredient type="bread-top" />
{/* <Burgeringredient type="cheese" />
<Burgeringredient type="meat" /> */}
{transformedIngredients}
<Burgeringredient type="bread-bottom" />
</div>
  );
}

export default Burger;