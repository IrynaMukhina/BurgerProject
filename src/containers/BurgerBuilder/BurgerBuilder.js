import React, {Component} from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      // salad: 2,
      // bacon: 1,
      // cheese: 2,
      // meat: 2,
    }
  }

  render() {
    return (
      <Auxiliry>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Auxiliry>
    );
  }
}

export default BurgerBuilder;