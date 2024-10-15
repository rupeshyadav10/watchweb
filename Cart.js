import React from 'react';

function Cart() {
  // Assume cartItems is retrieved from state or context
  const cartItems = [
    { id: 1, name: 'Rolex Submariner', price: 10000, quantity: 1 },
    { id: 2, name: 'Omega Seamaster', price: 8000, quantity: 2 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button className="btn btn-success">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
