import React from 'react';
// import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGRRDIENT_PRICE = {
  salad:0.5,
  cheese:0.4,
  meat:1.3,
  bacon:0.7
}
class BurgerBuilder extends React.Component {
  state ={
    ingredients: {
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice: 4

  }
  addIngredienthandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    // For which ingredient we are updating the value(E.g: bacon or meat )
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGRRDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredienthandler = (type) => {
 const oldCount = this.state.ingredients[type];
 if(oldCount <=0){
   return;
 }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] =updatedCounted;
    const priceDeduction = INGRRDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }
  render(){
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] =disabledInfo[key] <=0;
    }
    return(
      // <Aux>
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        ingredientAdded={this.addIngredienthandler}
        ingredientRemoved={this.removeIngredienthandler}
        price={this.state.totalPrice} />
        </div>
      // </Aux>
    )
  }
}

export default BurgerBuilder;