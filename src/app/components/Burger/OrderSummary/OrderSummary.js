import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] Will Update');
  }

  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingredient) => {
        return (
          <li key={ingredient}>
            <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
            {this.props.ingredients[ingredient]}
          </li>
        );
      }
    );
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total price: <strong>{this.props.totalPrice}</strong> &euro;
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
