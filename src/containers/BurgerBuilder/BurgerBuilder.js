import React, {Component} from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 0.5,
  cheese: 0.3,
  meat: 1.2,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purhasable: false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAdittion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdittion;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      }
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
      });

      this.updatePurchaseState(updatedIngredients);
    }
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((el) => ingredients[el])
      .reduce((sum, el) => sum + el, 0);

    this.setState({
      purhasable: sum > 0
    })
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    }

    for(let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Auxiliry>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purhasable}
        />
      </Auxiliry>
    );
  }
}

export default BurgerBuilder;