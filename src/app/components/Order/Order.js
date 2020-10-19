import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  const ingredients = [];

  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient],
    });
  }

  const ingredientOutput = ingredients.map((ingredient) => {
    return (
      <span
        key={ingredient.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>{props.price.toFixed(2)}</strong> &euro;
      </p>
    </div>
  );
};

export default order;
