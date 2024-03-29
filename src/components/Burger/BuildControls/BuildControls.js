import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BiuldControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current price: <b>{props.price.toFixed(2)}</b></p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientRemoved(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disable={props.disable[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default buildControls;