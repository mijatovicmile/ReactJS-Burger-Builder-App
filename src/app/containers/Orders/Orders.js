import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../services/request.service';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = { orders: [], loading: true };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then((order) => {
        let fetchedOrders = [];
        for (let key in order.data) {
          fetchedOrders.push({ ...order.data[key], id: key });
        }
        this.setState({ orders: fetchedOrders, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
