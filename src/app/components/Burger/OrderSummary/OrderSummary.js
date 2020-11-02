import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
        {props.ingredients[ingredient]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total price: <strong>{props.totalPrice.toFixed(2)}</strong> &euro;
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        Continue
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
