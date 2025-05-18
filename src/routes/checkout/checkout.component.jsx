import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  const handleIncrement = (cartItem) => {
    addItemToCart(cartItem);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      {/* Add your checkout form or summary here */}
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id} className="checkout-item">
              <span className="item-name">{name}</span>
              <span className="item-quantity">Quantity: {quantity}</span>
              <span>decrement</span>
              <span onClick={() => handleIncrement(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
