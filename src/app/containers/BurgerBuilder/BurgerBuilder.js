import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../services/request.service';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = (props) => {
  const [burger, setBurger] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
  });

  const [spinner, setSpinner] = useState({ isLoading: false });
  const [purchasable, setPurchasable] = useState(false);
  const [purchaseMode, setPurchaseMode] = useState({ purchaseMode: false });

  const updatePurchaseState = (ingredients) => {
    let sum = Object.values(ingredients).reduce((a, b) => {
      return a + b;
    }, 0);

    setPurchasable({ purchasable: sum > 0 });
  };

  const addIngredientHandler = (type) => {
    const oldCount = burger.ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...burger.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const oldPrice = burger.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;

    setBurger({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = burger.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...burger.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const oldPrice = burger.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceAddition;

    setBurger({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    updatePurchaseState(updatedIngredients);
  };

  const purchaseModeHandler = () => {
    setPurchaseMode({ purchaseMode: true });
  };

  const purchaseCancelHandler = () => {
    setPurchaseMode({ purchaseMode: false });
  };

  const purchaseContinueHandler = () => {
    setSpinner({ isLoading: true });
    const order = {
      ingredients: burger.ingredients,
      price: burger.totalPrice,
      customer: {
        name: 'Mile Mijatovic',
        address: {
          street: 'Test Street',
          zipCode: '76300',
          city: 'Bijeljina',
        },
        email: 'mile@milemijatovic.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        setSpinner({ isLoading: false });
        setPurchaseMode({ purchaseMode: false });
      })
      .catch((error) => {
        setSpinner({ isLoading: false });
        setPurchaseMode({ purchaseMode: false });
      });
  };
  let orderSummary = (
    <OrderSummary
      ingredients={burger.ingredients}
      totalPrice={burger.totalPrice}
      purchaseCancelled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
    />
  );
  if (spinner.isLoading) {
    orderSummary = <Spinner />;
  }

  return (
    <React.Fragment>
      <Burger ingredients={burger.ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        ordered={purchaseModeHandler}
        price={burger.totalPrice}
        purchasable={purchasable.purchasable}
      />
      <Modal
        show={purchaseMode.purchaseMode}
        modalClosed={purchaseCancelHandler}
      >
        {orderSummary}
      </Modal>
    </React.Fragment>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
