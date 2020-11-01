import React from 'react';

import classes from './CheckoutSummary.module.css';

import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1 className={classes.Title}>We hope it tastes well!</h1>
      <Burger ingredients={props.ingredients} />
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
    </div>
  );
};

export default checkoutSummary;
